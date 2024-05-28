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
    console.log(req.body);
    // newProduct[img_url] = req.body[img_url];
    await knex(PRODUCT_TABLE).insert(newProduct);
    res.redirect("/");
  } catch (error) {
    console.error("エラー内容:", error);
    res.status(500).json({ error: "サーバーエラー" });
  }
});


app.post('/upload', upload.single('image'), async (req, res) => {
  const imagePath = req.file.path;
  console.log(imagePath);
  const imgbbApiKey = process.env.IMGBB_API_KEY;
  console.log(imgbbApiKey)
  console.log("はしってますか〜〜")

  try {
    const imageBase64 = fs.readFileSync(imagePath, { encoding: 'base64' });
    // console.log(imageBase64)

    const formData = new FormData();
    formData.append('image', imageBase64);


    const response = await axios.post(`https://api.imgbb.com/1/upload?key=${imgbbApiKey}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data' // リクエストのヘッダーを設定して、multipart/form-data形式で送信することを指定します
      }
    });

    const imageUrl = response.data.data.url;
    console.log(imageUrl);

    // await db(PRODUCT_TABLE).insert({
    //   img_url: imgUrl
    // });

    res.status(200).json({ message: 'Image uploaded successfully', url: imageUrl });
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ error: 'Error uploading image' });
  } finally {
    fs.unlinkSync(imagePath); // 一時ファイルを削除
  }
});







app.listen(PORT, () => {
  console.log(`I am now waiting for incoming HTTP traffic on port ${PORT}!`);
});
