const {CityRepository} = require('../repository/index');
 
class CityService
{
    constructor()
    {
        this.CityRepository = new CityRepository();
    }
    async createCity(data)
    {
        try
        {
			const city = await this.CityRepository.createCity(data);
            return city;
		}
        catch(error)
        {
			console.log("something went wrong in the service layer of city")
			throw {error};
            
		}
    }

    async deleteCity(cityId)
    {
        try
        {
			const response = await this.CityRepository.deleteCity(cityId);
            return response;
		}
        catch(error)
        {
			console.log("something went wrong in the service layer of city")
			throw {error};
            
		}
    }
    async updateCity(cityId,data)
    {
        try
        {
            
			const response = await this.CityRepository.updateCity(cityId,data);
            return response;
		}
        catch(error)
        {
			console.log("something went wrong in the service layer of city")
			throw {error};
            
		}
    }
    async getCity(cityId)
    {
        try
        {
			const city = this.CityRepository.getCity(cityId);
            return city;
        }
        catch(error)
        {
			console.log("something went wrong in the service layer of city")
			throw {error};
            
		}
    }

    async getAllCities(filter)
    {
        try {

            const cities = this.CityRepository.getAllCities(filter.name);
            return cities;
            
        } catch (error) {
            console.log("somethign went wrong in the service layer of city")

            throw {error};
        }
    }
}

module.exports = CityService;