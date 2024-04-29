const express = require('express');
const {cityController, airportController, flightController} = require('../../controllers/index'); 
const {flightMiddlewares } = require('../../middlewares/index');

const router = express.Router();


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
router.patch('/flights/:id',flightController.updateFlight);





module.exports = router;