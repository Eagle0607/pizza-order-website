const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const cheeseRoutes = require("./routes/cheeseRoutes");
const pizzaRoutes = require("./routes/pizzaRoutes");
const ingredientRoutes = require("./routes/ingredientRoutes");
const cartRoutes = require("./routes/cartRoutes");
const crustRoutes = require("./routes/crustRoutes");
const sauceRoutes = require("./routes/sauceRoutes");
const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/pizzas", pizzaRoutes);
app.use("/api/ingredients", ingredientRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/crusts", crustRoutes);
app.use("/api/sauces", sauceRoutes);
app.use("/api/cheeses", cheeseRoutes);
const PORT = 5000;

app.listen(PORT, () => {

    console.log("Server running on port 5000");

});