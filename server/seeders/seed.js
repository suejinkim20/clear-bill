const db = require('../config/connection');
const { User, Bill } = require('../models');
const billSeeds = require ("./billSeeds.json");
const userSeeds = require ("./userSeeds.json");

db.once("open", async () => {
    await User.deleteMany({});
    await Bill.deleteMany({});

    const users = await User.insertMany(userSeeds);
    const bills = await Bill.insertMany(billSeeds);

    for (newBill of bills) {
        const tempUser = users[Math.floor(Math.random() * users.length)];
        tempUser.bills.push(newBill._id);
        await tempUser.save();
    }
    console.log('All Done!');

process.exit(0);
});