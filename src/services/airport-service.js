const { AirportRepository } = require('../repository/index');

const airportRepository = new AirportRepository();

class AirportService {
    async createAirport(airportData) {
        try {
            const airport = await airportRepository.createAirport(airportData);
            return airport;
        } catch (error) {
            console.log("something went wrong in the service layer of airport");
            throw { error };
        }
    }

    async createMultipleAirports(airportArray) {
        try {
            
            const airports = await airportRepository.createMultipleAirports(airportArray);
            return airports;
        } catch (error) {
            console.log("something went wrong in the service layer of airport");
            throw { error };
 
        }
    }

    async deleteAirport(airportId) {
        try {
            const response = await airportRepository.deleteAirport(airportId);
            return response;

        } catch (error) {
            console.log("something went wrong in the service layer of airport");
            throw { error };
        }
    }

    async updateAirport(airportId, newData) {
        try {
          
            const airport = await airportRepository.updateAirport(airportId, newData);
            return airport;

        } catch (error) {
            console.log("something went wrong in the service layer of airport");
            throw { error };
        }
    }
    async getAirport(airportId) {
        try {
            const airport = await airportRepository.getAirport(airportId);
            return airport;
        } catch (error) {
            console.log("something went wrong in the service layer of airport");
            throw { error };
        }
    }

    async getAllAirports(filter) {
        try {
            const airports = await airportRepository.getAllAirports(filter);
            return airports;

        } catch (error) {
            console.log("something went wrong in the service layer of airport");
            throw { error };
        }
    }
}

module.exports = AirportService