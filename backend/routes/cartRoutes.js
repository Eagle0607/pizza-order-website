const express = require("express");
const router = express.Router();

const Cart = require("../models/cartModel");


// Fetch all cart items

router.get("/", async (req, res) => {

    const items = await Cart.find();
    res.json(items);

});


// Insert item to cart

router.post("/", async (req, res) => {

    try {

        const { name } = req.body;

        // check if pizza already exists
        const existingItem = await Cart.findOne({ name });

        if (existingItem) {

            existingItem.quantity += 1;

            await existingItem.save();

            res.json({ message: "Quantity updated" });

        } else {

            const item = new Cart(req.body);

            await item.save();

            res.json({ message: "Item added to cart" });

        }

    } catch (error) {

        res.status(500).json(error);

    }

});

// Update quantity

router.put("/:id", async (req, res) => {

    await Cart.findByIdAndUpdate(req.params.id, {
        quantity: req.body.quantity
    });

    res.json({ message: "Quantity updated" });

});


// Delete item

router.delete("/:id", async (req, res) => {

    await Cart.findByIdAndDelete(req.params.id);

    res.json({ message: "Item deleted" });

});

module.exports = router;