const express = require('express');
const {cityController, airportController} = require('../../controllers/index'); 


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






module.exports = router;