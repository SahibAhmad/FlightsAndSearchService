const { FlightService } = require('../services/index');

const flightService = new FlightService();

const createFlight = async function (req,res) {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data: flight,
            success: true,
            message: "successfully created a flight",
        });
    } catch (error) {
        return res.status(500).json({
            data: error,
            success: false,
            message: "couldn't create the flight",
        });
    }
}

const getFlight = async function (req,res) {
    try {
        const flight  = await flightService.getFlight(req.params.id);
        return res.status(201).json({
            data: flight,
            success: true,
            message: "successfully fetched a flight",
        });
    } catch (error) {
        return res.status(500).json({
            data: error,
            success: false,
            message: "couldn't fetch the flight",
        });
    }
}

const getAllFlights = async function (req,res) {
    try {
    
        const flights  = await flightService.getAllFlights(req.body);
        
        return res.status(201).json({
            data: flights,
            success: true,
            message: "successfully fetched all flights",
        });
    } catch (error) {
        return res.status(500).json({
            data: error,
            success: false,
            message: "couldn't fetch the flights",
        });
    }
}

module.exports = {
    createFlight,
    getFlight,
    getAllFlights,
}