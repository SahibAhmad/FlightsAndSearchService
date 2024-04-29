const { FlightService } = require('../services/index');
const {SuccessCodes, ServerErrorCodes } = require('../utils/error-codes');

const flightService = new FlightService();

const createFlight = async function (req,res) {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(SuccessCodes.CREATED).json({
            data: flight,
            success: true,
            message: "successfully created a flight",
        });
    } catch (error) {
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: error,
            success: false,
            message: "couldn't create the flight",
        });
    }
}

const getFlight = async function (req,res) {
    try {
        const flight  = await flightService.getFlight(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data: flight,
            success: true,
            message: "successfully fetched a flight",
        });
    } catch (error) {
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: error,
            success: false,
            message: "couldn't fetch the flight",
        });
    }
}

const getAllFlights = async function (req,res) {
    try {
    
        const flights  = await flightService.getAllFlights(req.body);
        
        return res.status(SuccessCodes.OK).json({
            data: flights,
            success: true,
            message: "successfully fetched all flights",
        });
    } catch (error) {
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: error,
            success: false,
            message: "couldn't fetch the flights",
        });
    }
}

const updateFlight = async function (req,res) {
    try {
        const response = await flightService.updateFlight(req.params.id,req.body);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            message: "Successfully updated the flight",
        });
    } catch (error) {
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: error,
            success: false,
            message: "couldnt update the flight ",
        });
    }
}

module.exports = {
    createFlight,
    getFlight,
    getAllFlights,
    updateFlight,
}