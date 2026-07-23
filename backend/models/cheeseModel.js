const mongoose = require("mongoose");

const cheeseSchema = new mongoose.Schema({

    name: String,
    price: Number

});

module.exports = mongoose.model("Cheese", cheeseSchema);