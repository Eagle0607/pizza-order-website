const express = require("express");
const router = express.Router();

const Ingredient = require("../models/ingredientModel");

router.get("/", async (req, res) => {

    try {

        const ingredients = await Ingredient.find();

        res.json(ingredients);

    } catch (err) {

        res.status(500).json(err);

    }

});

module.exports = router;