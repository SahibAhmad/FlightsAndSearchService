const express = require('express');
const { PORT } = require('./config/serverConfig.js');
const bodyParser = require('body-parser')
const api = require('./routes/index.js')
const db = require('./models/index.js');

const {City,Airport} = require('./models/index.js');
// const CityRepository = require('./repository/city-repository.js');

const setupAndStartServer = async function () {
    try {
        
        const app = express();
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(bodyParser.json());

        app.use('/api',api);

        
        app.listen(PORT, async () => {
            console.log(`Server started at ${PORT}`);

            if(process.env.SYNC_DB == true)
            {
                db.sequelize.sync({alter: true})
            }
                        // const cityRepo = new CityRepository();

            // const airports = await Airport.findAll({ include: [{ model: City, attributes: ['id', 'name'] }] });
            // console.log(airports);

            // airports.forEach(airport => {
            //     console.log('Airport:', airport.dataValues);
            //     console.log('Associated City:', airport.City.dataValues);
            // });

            //can we query on city to find all aiports associated with it , ofcourse using joins we could have done

            // const city = await City.findByPk(3);
            // // console.log(city);
            // const airports = await city.getAirports(); //but we havent defined this any where have we, htis is where synchronisation would come in picture
            // //if we werent using migration files then we would have to use synchronisation number of times (any significant changes to db)
            // // but still here inorder to expose some higer functions like above we have to use synchronisation
            // //ok fun fact i didnt need to synchronise maybe in some point in future i might need it to be
          
            
            // console.log(airports);
            
        //     const newAirport = await Airport.create({
        //         name: "tohuy chu aksar gsaan international",
        //         cityId: 6,
        //     })

       

               
            
        });

       

    } catch (error) {
        console.error('Error setting up and starting the server:', error);
    }
};

setupAndStartServer();
