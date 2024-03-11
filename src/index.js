const express = require('express');
const { PORT } = require('./config/serverConfig.js');

const CityRepository = require('./repository/city-repository.js');

const setupAndStartServer = async function () {
    try {
        const app = express();
        app.listen(PORT, () => {
            console.log(`Server started at ${PORT}`);
		    const cityRepo = new CityRepository();
            
        });

    } catch (error) {
        console.error('Error setting up and starting the server:', error);
    }
};

setupAndStartServer();
