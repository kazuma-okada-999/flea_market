const express = require("express");
const path = require("path");
const app = express();
const knex = require("./db/knex.js");
const multer = require('multer');
const fs = require('fs');
const axios = require('axios');

require('dotenv').config({
  path: path.join(__dirname + '/.env'),
});

const upload = multer({ dest: './uploads/' });

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;

const PRODUCT_TABLE = "product";

app.use("/", express.static(path.join(__dirname, "../frontend/dist")));

app.get("/items", async (req, res) => {
  try {
    const items = await knex.select("*").from(PRODUCT_TABLE);
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


app.post('/upload', upload.single('image'), async (req, res) => {
  const imagePath = req.file.path;
  const imgbbApiKey = process.env.IMGBB_API_KEY;

  try {
    const imageBase64 = fs.readFileSync(imagePath, { encoding: 'base64' });

    const formData = new FormData();
    formData.append('image', imageBase64);


    const submitRes = await axios.post(`https://api.imgbb.com/1/upload?key=${imgbbApiKey}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data' 
      }
    });

    const imageUrl = submitRes.data.data.url;

    res.status(200).json({ message: '成功', url: imageUrl });
  } catch (error) {
    console.error('エラー内容:', error);
    res.status(500).json({ error: 'error' });
  } finally {
    fs.unlinkSync(imagePath); 
  }
});







app.listen(PORT, () => {
  console.log(`ポート ${PORT}!`);
});
