const db = require('./connection');
const { User, Bill } = require('../models');
const billSeeds = require ("./billSeeds.json");
const userSeeds = require ("./userSeeds.json");

// db.once("open", async () => {
//     await 

// });