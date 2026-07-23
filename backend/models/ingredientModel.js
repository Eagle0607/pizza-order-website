const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema({

    name: String,
    price: Number,
    image: String

});

module.exports = mongoose.model("Ingredient", ingredientSchema);