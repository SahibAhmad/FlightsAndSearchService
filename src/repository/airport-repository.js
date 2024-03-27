
const { Airport } = require('../models/index');
const { Op } = require('sequelize');

class AirportRepository {

    async createAirport(data) {
        try {
           
            const airport = await Airport.create(data);//data object has required properties
            
            return airport;
        } catch (error) {

            console.log("something went wrong in the repository layer")
            throw { error };
        }
    }

    async createMultipleAirports(airportArray) {
        //aiports -> array of airport objects 
        try {
            const airports = await Airport.bulkCreate(airportArray);
            return airports;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw { error };
        }

    }

    async deleteAirport(airportId) {
        try {
            await Airport.destroy({
                where: {
                    id: airportId,
                }
            });
            return true;

        } catch (error) {

            console.log("something went wrong in the repository layer");
            throw { error };

        }
    }

    async updateAirport(airportId, data) {
        try {

            const airport = await Airport.findByPk(airportId);
            if (data.name)
                airport.name = data.name;
            if (data.address)
                airport.address = data.address;

            await airport.save();

            return airport;

        } catch {

            console.log("something went wrong in the repository layer");
            throw { error };

        }
    }

    async getAirport(airportId) {
        try {
            const airport = await Airport.findByPk(airportId);
            return airport;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw { error };
        }
    }

    async getAllAirports(filter) {
        try {
            const airports = await Airport.findAll();
            return airports;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw { error };
        }
    }

}

module.exports = AirportRepository