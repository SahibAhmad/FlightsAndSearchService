const { Flight }  =  require('../models/index');
const {Op } = require("sequelize");

class FlightRepository {
    #createFilter(data) {
        let filter = {};
        if(data.arrivalAirportId) 
        filter.arrivalAirportId = data.arrivalAirportId;
        if(data.departureAirportId)
        filter.departureAirportId = data.departureAirportId;
        
        // we need to assign operators to filter
        //remember how do we filter
        /**
         * findAll({
         * where: {
         *  price: {
         * [Op.gte]:5000
         *  }
         * }
         * })
         * 
         * //something like this (we are actually making this where object)
         */
        let priceFilter = [];
        if(data.minPrice)
            priceFilter.push({price:{[Op.gte]: data.minPrice}});
        if(data.maxPrice) 
            priceFilter.push({price:{[Op.lte]:data.maxPrice}});
        
        Object.assign(filter,{[Op.and] : priceFilter});
        
        //price filter is array of objects of Op.## which we combine using Op.and
        return filter;
    }
    async createFlight(data) {
       try {
        
         const flight = await Flight.create(data);
         return flight;
       } catch (error) {
        console.log("something went wrong in repository layer");
        throw error;
       }
    }

    async getFlight(flightId) {
       try {
         const flight = await Flight.findByPk(flightId);
         return flight;
       } catch (error) {
        console.log("some thing went wrong in repository layer");
        throw error;
       }
    }

    async getAllFlights(filter) {
        try {
            let filterObject = this.#createFilter(filter);
           
            const flights = await Flight.findAll({
                where: filterObject,
            });
            return flights;
        } catch (error) {
            console.log("some thing went wrong in repository layer of flight");
            throw error;
        }
    }

    async updateFlight(flightId, newData) {
        try {
            await Flight.update(newData, {
                where: {
                    id: flightId,
                }
            });
            return true;
        } catch (error) {
            console.log("something went wrong in repository layer of flight");
            throw error;
        }
    }
}

module.exports = FlightRepository