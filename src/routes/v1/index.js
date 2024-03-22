const express = require('express');
const {cityController} = require('../../controllers/index'); 


const router = express.Router();


router.post('/city',cityController.createCity);
router.delete('/city/:id',cityController.deleteCity);
router.patch('/city/:id',cityController.updateCity);
router.get('/city/:id',cityController.getCity);
router.get('/city',cityController.getAllCities);




module.exports = router;