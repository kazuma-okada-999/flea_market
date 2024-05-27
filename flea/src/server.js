const express = require("express");
const path = require("path");
const app = express();
const knex = require("./db/knex.js");

// req.bodyを利用するための決め文句
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;

const PRODUCT_TABLE = "product";

app.use("/", express.static(path.join(__dirname, "../frontend/dist")));

app.get("/items", async (req, res) => {
  try {
    const items = await knex.select("*").from(PRODUCT_TABLE);
    // console.log(items);
    res.json(items);
  } catch (error) {
    console.error("エラー内容:", error);
    res.status(500).json({ error: "サーバーエラー" });
  }
});

app.post("/seller/products", async (req, res) => {
  try {
    const newProduct = req.body.furima_product;
    await knex(PRODUCT_TABLE).insert(newProduct);
    res.redirect("/");
  } catch (error) {
    console.error("エラー内容:", error);
    res.status(500).json({ error: "サーバーエラー" });
  }
});

app.listen(PORT, () => {
  console.log(`I am now waiting for incoming HTTP traffic on port ${PORT}!`);
});
