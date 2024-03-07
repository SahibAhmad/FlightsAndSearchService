# THis is not feature based setup

src/
    index.js//server
    modes/
    controllers/
    middlewares/
    services/
    utils/(utility helpers)
    config/(database configureation etc)
    respository/

tests/[later]
static/
temp/

othere folders than src folder dont need to be loaded in server for lighter booting
that is why we use src folder seperately



Setup express js in index.js
use cjs for simplicity
require express
setup and start function 
listen 
setup nodemon start scrip npx nodemon add "start":"npx nodemon src/index.js" to scripts, then just use npm start
- Setup environmental variables for sensitive variables
- Store them in environment not in your code , that is why it wont be available for everyone to see
- Environment variables are excecsible in process, 
- We can setup up environment variables with package dotenv (look it up)
- npm i dotenv

- it is very easy to setup

- keep it outside src , create new file .env
- write PORT = 3000

- we can access it in process object, we have key env, and we have keyvariable pairs, among them you will see paths etc, you will also have port variable somewhere but first require the package as well 
- assignment look in real system environemnt variable where you have to mingw  etc

- we want to segregate this part from index.js because we want index to be only for booting

- we can keep this job for config folder ,create serverConfig.js
then do all require, call .confi etc

- now we have export port form configt to index.js
- we can use module.exports = {
    PORT: process.env.PORT,
}

- in index.js, const {PORT} = require('./config/serverCOnfig");

- commit basic setup .env
- if someone clones we have to write in readme that you have to setup .env file yourself

- There is some serious issue with this code i cant seem to figure it out and say it words but it seems it gives undefined value if i dont use npm start and just use node index.js
also we cant use await in cjs
(i have to revise previouse and have to think about what is happeing here
) 

- Ok alhamdulillah i get it , now , it is because we have to run this from root like node src/index.js
- otherwise it wont know about env file i guess. because if we put .env file in src folder it works fine with just node index.js
- Look answer from stack overflow

This is fantastic! – 
tmurv
Aug 6, 2023 at 17:36
Thanks I was running the script from task manager this solve it require('dotenv').config({path:'complete_path/.env'}) – 
ClearBoth
Aug 24, 2023 at 2:43
This is the only answer that has worked. Heads U
it means we can also use something likea bove 

HOwever best thing i think is to just use nodemon from root like we are doing till now

In production there can be multiple env files
say one for local development environmeed dev env
on production there are also env ifle prod env
again for testing server there will be other as well

so will write some more code lateron to automaticlly detect which env files to take

It is also great to do similar things together
say require together multiple modules you have to 

currently we are working locally  to local database
database server will url based locally

on aws etc that machine will have its on url
You might have noticed why have we kept asyn setupandstartserver
we will realise it after some time

- Why it is not good idea to setup sql in our aws, 
- It will cause problems, basically even horizental scalling concurrency issues etc


- setup our body pareser
- and setup middleware for this
- bodyParser.json(), bodyparser.urlencoded({encoded:true})

- now setup sequalise orm, get sequalise npm
- and setup it , apart from sequalise , install sequelize cli, it does many thing automatically and sets up database configuration
- also we also need mysql2 it is a dependency inorder to connect sequalise to mysql databasee(it provides some drivers to setup), similarly if we had to connect it to sqlite3 etc it has own dependedncy, similarly for pg sql there is pg package


- to setup sequelize a doc has been sent (i will have to figure it out myself)

- Once installed we need to do some steps, we need to configure sequelize to connect to mysql2

-sequlize cli provides some commands
- we dont need to go to mysql and say create database
- sequelize provides its interface to do same
- `npx sequelize db:create` -> create datbase by configuration (what is this configuration , we have to get those database config files)

- before executing above command we havet
- ` npmx sequelize init ` it creates some folders and files (models, migrations,seeders, config/config.json ) but outside src ,

- if we call this command from src folder then it is gonna add what it has to add but if folders already exist it will just add files  but it will override many of the things , delete services etc, add folders to ourr model folder we can bring them back from github, but it is for learning purposes, so we have to use this command carefluly
- Every one of those folders will have workings

-  we need those seeders folder etc now and just bring lets bring models folder inside
 delete internal models folder

 - i think those commands should be run while setting up environment earlier before even writing code

 - config.json has 3 set of json for  development , test production inisde config folder on root,  because differnt production enviroment require different database environment

 - Inside  now our src/model there will be a file index.js
 - we dont need to do anything with it it's sequalize code some sort of  we just might have to configure it here and there but we might not need to do anything with it

 - Note we can do all of those things manually without using cli of sequelize but it does  alot of things
 

- There is no problem with keeping seeders etc inside, for external config folder we also have inside config folder , we migh tjust copy config.json inside our /src/config folder and delete external root config foler,
although i am sure that somewhere some path value needs to be changed to access this file now since its path has change

- Seeders-> are used to put dummy data (seedup for starting information we will look into it  lateron )

- now we need to now  execture npx db:create

- but before there go to config.json and setup names of database etc, ignore production and test part

- Name -> Flights_Search_DB_DEV and password as you mysql password

- now execute npx dpcreate whatever, but it will throw error as expected but if you run this command from src folder it will run correctly

- you can now look in your databases in mysql it will have added this

- This is how can we setup this easily , we shouldnt have this confi.sjon file in git etc, we should git ignore it , src/config/config.js
  
-  Change REadme file and write down details of setting up  
 
 
