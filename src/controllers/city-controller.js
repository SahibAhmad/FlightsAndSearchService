const {CityService} = require('../services/index');


const cityService = new CityService();

async function  createCity(req,res)  {

   try {
     const city = await cityService.createCity(req.body);
     return res.status(201).json({
        data: city,
        success: true,
        message: "successfully created a city"
     });
   } catch (error) {
        
        return res.status(500).json({
            data: error,
            success: false,
            message:"city not created"
        });
   }

    
}

async function createMultipleCities(req,res) {
    try {
        const cities = await cityService.createMultipleCities(req.body);
        return res.status(201).json({
            data: cities,
            success: true,
            message: "successfully created multiple cities"
        });
    } catch (error) {
        
        return res.status(500).json({
            data: error,
            success: false,
            message: "cities not created",
        });
    }
}


async function deleteCity(req,res) {
    try {
        const response  = await cityService.deleteCity(req.params.id);
        return res.status(201).json({
            data: response,
            success: true,
            message: "successfully deleted a city",
        });
    } catch (error) {

        return res.status(500).json({
            data: error,
            success: false,
            message: "couldn't delete city"
        });
        
    }
}

async function updateCity(req,res) {
    try {
        const response = await cityService.updateCity(req.params.id,req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: "successfully updated city",
        });
    } catch (error) {
        return res.status(500).json({
            data: error,
            success: false,
            message: "couldn't update city",
        });
    }
}

async function getCity(req,res) {
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(201).json({
            data: response,
            success: true,
            message: "successfully fetched city",
        });
    } catch (error) {
        
        return res.status(500).json({
            data: error,
            success: false,
            message: "couldn't fetch the city",
        });
    }
}

async function getAllCities(req,res) {
    try {
        const response = await cityService.getAllCities(req.query);
        return res.status(200).json({
            data: response,
            success: true,
            message: "successfully fetched all cities"
        });
        
    } catch (error) {

        return res.status(500).json({
            data: error,
            success: false,
            message: "couldnt fetch the cities",
        });
        
    }
}
async function getAllAirports(req,res) {
    try {

        const airports = await cityService.getAllAirports(req.params.id);
        return res.status(200).json({
            data: airports,
            success: true,
            message: "successfully fetched all airports belonging to the given city",
        });
        
    } catch (error) {
        return res.status(500).json({
            data: error,
            success: false,
            message: "couldnt fetch airports belonging to the given city",
        });
    }
}
module.exports = {
    createCity,
    createMultipleCities,
    deleteCity,
    updateCity,
    getCity,
    getAllCities,
    getAllAirports,

}