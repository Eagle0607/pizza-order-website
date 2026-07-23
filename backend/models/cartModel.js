const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({

    name: String,

    price: Number,

    quantity: Number,

    image: String,

    ingredients: String,

    crust: String,

    cheese: String,

    sauce: String

});

module.exports = mongoose.model("Cart", cartSchema);