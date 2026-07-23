const mongoose = require("mongoose");

const sauceSchema = new mongoose.Schema({

    name: String,
    price: Number

});

module.exports = mongoose.model("Sauce", sauceSchema);