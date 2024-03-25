const {City} = require('../models/index.js');
const {Op} = require("sequelize");
console.log(typeof City); //should it be function or object
//clearly we are exporting function from City.js

//dont worry these must be  static methods 
class CityRepository {
	async createCity({name})  //we can have data here as well
	{
		try{
			const city = await City.create({
                name

            });
			return city;
		} catch(error){
			console.log("something went wrong in the repository layer")
			throw {error};
            
		}
		
	}

	async deleteCity(cityId)
	{
		try{
			await City.destroy({
				where: {

					id: cityId,
				}
			});
            return true;
		} catch(error) {
            console.log("something went wrong in repository layer")
			throw {error};
		}
	}

    async updateCity(cityId,data) { 
        try {
            
            /**
             * If we use the commented portion, it doesnt return what was updated
             * therefore we use other method
             * in pgsql however, we could have easily have used concept of returning true
             * You can google about returning true sequelize mysql
             */
            // const city = await City.update(data, {
            //     where : {
            //         id : cityId
            //     }
            // });
            // return city;

            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            
            return city;

        } catch(error) {
            console.log("something went wrong in repository layer")
			throw {error};
        }

    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city; 
        } catch(error) {
            console.log("something went wrong in repository layer")
			throw {error};
        }
    }

    async getAllCities(name) {
        try {
            if(name)
            {
                // console.log(filter.name);
                const cities = await City.findAll({
                    where : {
                        name: {
                            [Op.startsWith]: name,
                        }
                        
                    }
                });

                return cities;

            }
            const cities = await City.findAll();
            return cities;
            
        } catch (error) {
            
            console.log("somethign went wrong in repository layer");
            throw {error};
        }
    }
}

module.exports = CityRepository;

