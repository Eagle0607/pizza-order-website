const express = require("express");
const router = express.Router();

const Crust = require("../models/crustModel");

router.get("/", async (req, res) => {

    try {

        const crusts = await Crust.find();

        res.json(crusts);

    } catch (err) {

        res.status(500).json(err);

    }

});

module.exports = router;