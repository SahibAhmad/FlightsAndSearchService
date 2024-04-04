const {AirportService} = require('../services/index');
const {SuccessCodes, ServerErrorCodes } = require('../utils/error-codes');

const airportService = new AirportService();

async function createAirport(req,res)
{
    try {
        const airport = await airportService.createAirport(req.body);
        console.log(airport);
        return res.status(SuccessCodes.CREATED).json({
            data: airport,
            success: true,
            message: "successfully created an airport",
        });
    } catch (error) {
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: error,
            success: false,
            message: "airport not created",
        });
    }
}

async function createMultipleAirports(req,res) {
    //assume our req.body contains an array of all airport objects, idont know how to simulate this in postman though
    try {
        
        const airports = await airportService.createMultipleAirports(req.body["airports"]);//data here is name of array
        return res.status(SuccessCodes.CREATED).json({
            data: airports,
            success: true,
            message: "successfully created aiports",
        });
    } catch (error) {
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: error,
            success: false,
            message: "aiports not created",
        });
    }


}

async function deleteAirport(req,res) {
    try {
        const response = await airportService.deleteAirport(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            message: "successfull deleted airport",
            
        });
    } catch (error) {
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: error,
            success: false,
            message: "couldn't delete the airport",
        });
    }
}

async function updateAirport(req,res){
    try {

        const airport = await airportService.updateAirport(req.params.id,req.body);
        return res.status(SuccessCodes.OK).json({
            data: airport,
            success: true,
            message: "successfully updated airport",
        
        });
    } catch (error) {
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: error,
            success: false,
            message: "couldnt update the airport",
        });
    }
}

async function getAirport(req,res) {
    try {
        console.log(req.params.id)
        const airport = await airportService.getAirport(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data: airport,
            success: true,
            message: "successfully fetched the airport",
        })
    } catch (error) {
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: error,
            success: false,
            message: "couldnt fetch the airport",
        });
    }
}

async function getAllAirports(req,res) {
    try {
        const airports = await airportService.getAllAirports(req.body);
        return res.status(SuccessCodes.OK).json({
            data: airports,
            success: true,
            message: "successfully fetched airports",
        })
    } catch (error) {
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: error,
            success: false,
            message: "couldnt fetch  airports",
        });
    }
}


module.exports = {
    createAirport,
    createMultipleAirports,
    deleteAirport,
    updateAirport,
    getAirport,
    getAllAirports
}