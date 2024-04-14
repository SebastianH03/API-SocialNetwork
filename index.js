const connection = require("./dataBase/connection");
const express = require("express");
const cors = require("cors");

console.log("API social network started");

// bd connection
connection();

// node server
const app = express();
const puerto = 3900;

// cors configuration
app.use(cors());

// transform body data to object js
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// routes configuration

// Listen to http request