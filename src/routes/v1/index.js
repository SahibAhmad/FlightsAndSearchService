const express = require('express');
const {cityController} = require('../../controllers/index'); 


const router = express.Router();


router.post('/city',cityController.createCity);
router.post('/city/:id',cityController.deleteCity);
router.patch('/city/:id',cityController.updateCity);
router.get('/city/:id',cityController.getCity);




module.exports = router;