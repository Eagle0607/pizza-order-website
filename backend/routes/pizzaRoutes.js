const express = require("express");
const router = express.Router();

const Pizza = require("../models/pizzaModel");

router.get("/", async (req, res) => {

    try {

        const pizzas = await Pizza.find();
        res.json(pizzas);

    } catch (err) {

        res.status(500).json(err);

    }

});

module.exports = router;