const mongoose = require("mongoose");

const crustSchema = new mongoose.Schema({

    name: String,
    price: Number

});

module.exports = mongoose.model("Crust", crustSchema);