const { ClientErrorCodes } = require('../utils/error-codes');

const validateCreateFlight = (req, res, next) => {
    //we are bound to have flightNumber , airplaneId, and all those mandatory properteis, except totalseats

    if (
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !rq.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price
    ) {
        //if any of body params is missing we come inside if 
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            message: "invalid request body for create flight",
            err: "missing mandatory properties to create a flight"
        });
    }
    else 
    next();
}


module.exports = {
    validateCreateFlight,

}