# Welcome to Flights Service

## Project Setup

- clone the project on your local
- Execute `npm install` in root directory of your project
- Create a `.env` file in the root dir oand add the following environment variable

    - `PORT=3000`

- Inside the `src/config` folder create a new file `config.json` and then add the following piece of code



- ONce you've added your db confiuration as listed above, go to the src folder from your terminal  ececute `npx sequelize db:create`


# Create Tables

- `npx seqeulize model:generate --name City --attributes name:String`  -> this will create model named City.js which will have structure of our table and migration file which will be helpful to make changes and help in somewhat version controll of our database changes , it will also create a migration file

- `npx sequelize db:migrate` -> apply all migrations(sync database with all the changes made)

- if you check in mysql it will create two tables, one is for meta data (which migration files have been applied) 
- You can rollback to last with adding :undo to migrate in above command


## Tables

### City -> id, name, created_at, updated_at

### Airport -> id, name, address, city_id, created_at, update_at
    Relationship -> City has many airports and airport belongs to a city (one to many relationship)

    This is why we dont have airport column for cities, but we will have city column for airport

    e






