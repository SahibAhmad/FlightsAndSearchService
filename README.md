# Welcome to Flights Service

## Project Setup

- clone the project on your local
- Execute `npm install` in root directory of your project
- Create a `.env` file in the root dir oand add the following environment variable

    - `PORT=3000`

- Inside the `src/config` folder create a new file `config.json` and then add the following piece of code

{
  "development": {
    "username": "root",
    "password": "YOURPASSWORD",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}




- ONce you've added your db confiuration as listed above, go to the src folder from your terminal  do following: 


# Create Tables
   ` npx sequelize db:migrate`


- Following will be created : 


### City -> id, name, created_at, updated_at

### Airport -> id, name, address, city_id, created_at, update_at
    Relationship -> City has many airports and airport belongs to a city (one to many relationship)

    This is why we dont have airport column for cities, but we will have city column for airport


### Flights ->

### Airplane -> 




# Following Apis have been exposed


router.post('/city',cityController.createCity);
router.post('/cities',cityController.createMultipleCities)
router.delete('/city/:id',cityController.deleteCity);
router.patch('/city/:id',cityController.updateCity);
router.get('/city/:id',cityController.getCity);
router.get('/city',cityController.getAllCities);
router.get('/city/:id/airports',cityController.getAllAirports)


router.post('/airport',airportController.createAirport); //working
router.post('/airports',airportController.createMultipleAirports); 
router.get('/airport/:id',airportController.getAirport); //working
router.delete('/airport/:id',airportController.deleteAirport); //working
router.patch('/airport/:id',airportController.updateAirport); //working
router.get('/airports',airportController.getAllAirports); //working


router.post('/flights',flightMiddlewares.validateCreateFlight,flightController.createFlight);//working
router.get('/flights/:id',flightController.getFlight); //working
router.get('/flights',flightController.getAllFlights); //working









