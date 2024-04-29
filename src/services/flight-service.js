const {FlightRepository,AirplaneRepository} = require('../repository/index');
const {compareTime, } = require('../utils/helper');
const airplaneRepository = new AirplaneRepository();

const flightRepository  = new FlightRepository();

class FlightService {
    async createFlight(data) {
        try {
            
            if(!compareTime(data.arrivalTime,data.departureTime)){
                throw {
                    error: "arrival Time cant be less than departure time",
                }
            }
            const airplane = await airplaneRepository.getAirplane(data.airplaneId);
            data.totalSeats = airplane.capacity;

            const flight = await flightRepository.createFlight(data);
            return flight;

        } catch (error) {
            console.log("something went wrong in service layer");
            throw {error};
        }
    }

    async getFlight(flightId) {
        try {
            const flight = await flightRepository.getFlight(flightId);
            return flight;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw {error};
        }
    }

    async getAllFlights(filter) {
        try {
           
           const flights = await flightRepository.getAllFlights(filter);
           
           return flights; 
        } catch (error) {
            console.log("something went wrong in service layer");
            throw {error};  
        }
    }

    async updateFlight(flightId, newData) {
        try {
            const response = await flightRepository.updateFlight(flightId,newData);
            return response;
        } catch (error) {
             console.log("something went wrong in service layer");
            throw error;  
        }
    }
}

module.exports = FlightService