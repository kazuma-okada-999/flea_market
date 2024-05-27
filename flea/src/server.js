const express = require("express");
const path = require("path");
const app = express();
const knex = require("./db/knex.js");

// req.bodyを利用するための決め文句
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;

const test = ["こんにちわ"];

app.use("/", express.static(path.join(__dirname, "../frontend/dist")));


app.get("/items", async (req, res) => {
    try {
        const items = await knex.select("*").from("product");
        // console.log(items);
        res.json(items);
      } catch (error) {
        console.error("Error fetching items:", error);
        res.status(500).json({ error: "Internal server error" });
      }
});

// app.get("/seller", (req, res) => {
  
// })

app.listen(PORT, () => {
  console.log(`I am now waiting for incoming HTTP traffic on port ${PORT}!`);
});
