const express = require("express");
const router = express.Router();

const Sauce = require("../models/sauceModel");

router.get("/", async (req, res) => {

    try {

        const sauces = await Sauce.find();

        res.json(sauces);

    } catch (err) {

        res.status(500).json(err);

    }

});

module.exports = router;