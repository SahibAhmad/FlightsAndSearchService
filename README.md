# Welcome to Flights Service

## Project Setup

- clone the project on your local
- Execute `npm install` in root directory of your project
- Create a `.env` file in the root dir oand add the following environment variable

    - `PORT=3000`

- Inside the `src/config` folder create a new file `config.json` and then add the following piece of code



```json
  {
    "development": {
    "username": "root",
    "password": "YOURPASSWORD",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
     }

}
  ```


- ONce you've added your db confiuration as listed above, go to the src folder from your terminal  do following: 

# Create database

`npx sequelize db:create`

# Create Tables
   ` npx sequelize db:migrate`





# Backend Service API Documentation

Welcome to the documentation for the backend service API. This API provides endpoints to manage cities, airports, and flights for a flight booking system. Below you will find details on each endpoint along with the expected request bodies and responses.

## Base URL

The base URL for all endpoints is `/api/v1`.

## City Endpoints

### Create City
- **URL:** `/city`
- **Method:** `POST`
- **Description:** Creates a new city.
- **Request Body:**
  - `name` (string): The name of the city.
- **Example Request Body:**
  ```json
  {
    "name": "New York"
  }
  ```
- **Response:** Returns the created city object.
  
### Create Multiple Cities
- **URL:** `/cities`
- **Method:** `POST`
- **Description:** Creates multiple cities.
- **Request Body:**
  - An array of city objects containing the `name` attribute for each city.
- **Example Request Body:**
  ```json
  [
    {"name": "Paris"},
    {"name": "London"}
  ]
  ```
- **Response:** Returns an array of created city objects.
  
### Delete City
- **URL:** `/city/:id`
- **Method:** `DELETE`
- **Description:** Deletes a city by ID.
- **Parameters:**
  - `id` (integer): The ID of the city to delete.
- **Response:** Returns a success message upon successful deletion.

### Update City
- **URL:** `/city/:id`
- **Method:** `PATCH`
- **Description:** Updates a city by ID.
- **Parameters:**
  - `id` (integer): The ID of the city to update.
- **Request Body:**
  - `name` (string): The updated name of the city.
- **Example Request Body:**
  ```json
  {
    "name": "Updated City Name"
  }
  ```
- **Response:** Returns the updated city object.

### Get City by ID
- **URL:** `/city/:id`
- **Method:** `GET`
- **Description:** Retrieves a city by ID.
- **Parameters:**
  - `id` (integer): The ID of the city to retrieve.
- **Response:** Returns the city object.

### Get All Cities
- **URL:** `/city`
- **Method:** `GET`
- **Description:** Retrieves all cities.
- **Response:** Returns an array of city objects.

### Get All Airports of a City
- **URL:** `/city/:id/airports`
- **Method:** `GET`
- **Description:** Retrieves all airports belonging to a city.
- **Parameters:**
  - `id` (integer): The ID of the city.
- **Response:** Returns an array of airport objects.

## Airport Endpoints

### Create Airport
- **URL:** `/airport`
- **Method:** `POST`
- **Description:** Creates a new airport.
- **Request Body:**
  - `name` (string): The name of the airport.
  - `address` (string): The address of the airport.
  - `cityId` (integer): The ID of the city to which the airport belongs.
- **Example Request Body:**
  ```json
  {
    "name": "JFK Airport",
    "address": "New York, NY",
    "cityId": 1
  }
  ```
- **Response:** Returns the created airport object.

### Create Multiple Airports
- **URL:** `/airports`
- **Method:** `POST`
- **Description:** Creates multiple airports.
- **Request Body:**
  - An array of airport objects containing the `name`, `address`, and `cityId` attributes for each airport.
- **Example Request Body:**
  ```json
  [
    {"name": "Heathrow Airport", "address": "London, UK", "cityId": 2},
    {"name": "Charles de Gaulle Airport", "address": "Paris, France", "cityId": 3}
  ]
  ```
- **Response:** Returns an array of created airport objects.

### Delete Airport
- **URL:** `/airport/:id`
- **Method:** `DELETE`
- **Description:** Deletes an airport by ID.
- **Parameters:**
  - `id` (integer): The ID of the airport to delete.
- **Response:** Returns a success message upon successful deletion.

### Update Airport
- **URL:** `/airport/:id`
- **Method:** `PATCH`
- **Description:** Updates an airport by ID.
- **Parameters:**
  - `id` (integer): The ID of the airport to update.
- **Request Body:**
  - `name` (string): The updated name of the airport.
  - `address` (string): The updated address of the airport.
- **Example Request Body:**
  ```json
  {
    "name": "Updated Airport Name",
    "address": "Updated Airport Address"
  }
  ```
- **Response:** Returns the updated airport object.

### Get Airport by ID
- **URL:** `/airport/:id`
- **Method:** `GET`
- **Description:** Retrieves an airport by ID.
- **Parameters:**
  - `id` (integer): The ID of the airport to retrieve.
- **Response:** Returns the airport object.

### Get All Airports
- **URL:** `/airports`
- **Method:** `GET`
- **Description:** Retrieves all airports.
- **Response:** Returns an array of airport objects.

## Flight Endpoints

### Create Flight
- **URL:** `/flights`
- **Method:** `POST`
- **Description:** Creates a new flight.
- **Request Body:**
  - Various attributes for the flight as per the Flight model provided.
- **Example Request Body:**
  ```json
  {
    "flightNumber": "ABC123",
    "airplaneId": 1,
    "departureAirportId": 1,
    "arrivalAirportId": 2,
    "arrivalTime": "2024-04-05T12:00:00Z",
    "departureTime": "2024-04-05T10:00:00Z",
    "price": 200,
    "boardingGate": "A1",
    "totalSeats": 150
  }
  ```
- **Response:** Returns the created flight object.

### Get Flight by ID
- **URL:** `/flights/:id`
- **Method:** `GET`
- **Description:** Retrieves a flight by ID.
- **Parameters:**
  - `id` (integer): The ID of the flight to retrieve.
- **Response:** Returns the flight object.

### Get All Flights
- **URL:** `/flights`
- **Method:** `GET`
- **Description:** Retrieves all flights.
- **Response:** Returns an array of flight objects.

## Models

Below are the Sequelize models used in the backend service:

### Airport Model
```javascript
// Airport Model
{
  name: DataTypes.STRING,
  address: DataTypes.STRING,
  cityId: {
    type:  DataTypes.INTEGER,
    allowNull: false,
  }
}
```

### City Model
```javascript
// City Model
{
  name: {
    type: DataTypes.STRING,
    allowNull: false,


    unique: true,
  }
}
```

### Flight Model
```javascript
// Flight Model
{
  flightNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  airplaneId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  departureAirportId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  arrivalAirportId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  arrivalTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  departureTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  boardingGate: {
    type: DataTypes.STRING,
  },
  totalSeats: {
    type: DataTypes.INTEGER,
  }
}
```

This documentation provides comprehensive information on how to use the backend service API. If you have any further questions or need assistance, feel free to contact us.







