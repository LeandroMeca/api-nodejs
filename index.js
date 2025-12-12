//const { Person } = require("./person");
const dotenv = require("dotenv");
const connectToDB = require("./src/database/conect");

dotenv.config();

connectToDB();

//require("./modules/path");
//require("./modules/fs");
//require("./modules/https");

require("./modules/express");

//const person = new Person("John Doe");
