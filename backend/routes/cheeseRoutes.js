const express = require("express");
const router = express.Router();

const Cheese = require("../models/cheeseModel");

router.get("/", async (req, res) => {

    try {

        const cheeses = await Cheese.find();
        res.json(cheeses);

    } catch (error) {

        res.status(500).json(error);

    }

});

module.exports = router;