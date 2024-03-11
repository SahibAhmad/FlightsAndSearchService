# Welcome to Flights Service

## Project Setup

- clone the project on your local
- Execute `npm install` in root directory of your project
- Create a `.env` file in the root dir oand add the following environment variable

    - `PORT=3000`

- Inside the `src/config` folder create a new file `config.json` and then add the following piece of code



- ONce you've added your db confiuration as listed above, go to the src folder from your terminal  ececute `npx sequelize db:create`


# Create Tables

- `npx seqeulize model:generate --name City --attributes name:String`  -> this will create model named City.js which will have structure of our table and migration file which will be helpful to make changes and help in somewhat version controll of our database changes

- `npx sequelize db:migrate` -> apply all migrations(sync database with all the changes made)

- if you check in mysql it will create two tables, one is for meta data (which migration files have been applied) 
- You can rollback to last with adding :undo to migrate in above command



const {City} = require('../models/index.js');

class CityRepository {
	async createCity({name}) 
	{
		try{
			const city = await City.create({
                name

            });
			return city;
		} catch(error){
			console.log("something went wrong in the repository layer")
			throw {error};
            //later we will gracefully 
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

    async updateCity(cityId,data) { //cityId for identifying which one to update and data is object what to update
        try {
            // there are also functions for those things
            //first way
            const city = await City.update(data, {
                where : {
                    id : cityId
                }
            });
            return city;
            // there is another method  see documentation

        } catch(error) {
            console.log("something went wrong in repository layer")
			throw {error};
        }

    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city; //you should actually check here whether it has found anything
        } catch(error) {
            console.log("something went wrong in repository layer")
			throw {error};
        }
    }
}


