import { React, useRef, useState, useEffect } from "react";
import axios from "axios";

export const Seller = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [image, setImage] = useState();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async () => {
    // event.preventDefault();
    if (!selectedFile) {
      console.error("ファイルなし");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Image uploaded:", response.data);
      setImgUrl(response.data.url)
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  // const formData = new FormData();
  // formData.append("image", selectedFile);
  // console.log(formData);
  //     try {
  //       const response = await fetch("/upload", {
  //         method: "POST",
  //         body: formData,
  //       });

  //       const result = await response.json();
  //       console.log("Image uploaded:", result);
  //       setImgUrl(result.url);
  //     } catch (error) {
  //       console.error("Error uploading image:", error);
  //     }
  //   };

  useEffect(() => {
    if (selectedFile) {
      console.log("更新");
      handleSubmit();
    }
  }, [selectedFile]);

  return (
    <div className="sell_wrapper form_wrapper sell_input">
      <form
        id="sell_input"
        className="sell_list"
        data-controller="alert-page sending"
        action="/seller/products"
        acceptCharset="UTF-8"
        method="post"
      >
        <div className="sell_item">
          <h3 className="form_title is_required">商品タイトル</h3>
          <p className="form_text form_text_12">100文字まで入力できます</p>
          <div className="textarea_resize_wrap">
            <textarea
              className="form_textarea height_104 is_seller limit50"
              maxLength="100"
              placeholder="商品の内容が伝わりやすいように、端的にまとめましょう。
                    例：【スニーカー】ナイキ　ジョーダン1"
              name="furima_product[item]"
              id="furima_product_title"
            ></textarea>
          </div>
        </div>
        <div className="sell_item">
          <h3 className="form_title is_required">商品の詳細</h3>
          <p className="form_text form_text_12">1,000文字まで入力できます</p>
          <div className="textarea_resize_wrap">
            <textarea
              className="form_textarea height_168 is_seller limit1000"
              maxLength="1100"
              placeholder="こだわりやアピールポイントなど、商品について詳しく説明しましょう。"
              name="furima_product[description]"
              id="furima_product_detail"
            ></textarea>
          </div>
        </div>
        <div className="sell_item">
          <h3 className="form_title is_required">商品の写真</h3>
          <p className="form_text form_text_12">１枚以上挿入してください</p>
          <form>
            <input
              type="file"
              onChange={handleFileChange}
            />
          </form>
        </div>
        <div className="sell_item">
          <h3 className="form_title is_required">在庫数</h3>
          <p className="form_text form_text_12">半角数字で入力してください</p>
          <input
            className="form_input is_small is_seller only_num"
            maxLength="3"
            size="3"
            type="tel"
            name="furima_product[stock]"
            id="furima_product_stock_count"
          ></input>
        </div>

        <div className="sell_item">
          <h3 className="form_title is_required">商品価格</h3>
          <div className="input_price_wrap js_input_price">
            <p className="form_text form_text_12">
              税込み価格を半角数字で入力してください。
            </p>
            <input
              className="form_input is_small is_seller only_num"
              maxLength="7"
              size="7"
              type="tel"
              name="furima_product[sell_price]"
              id="furima_product_price"
            ></input>
            <span className="unit">円</span>
          </div>
        </div>

        <div className="sell_btn_container">
          <input
            type="submit"
            name="furima_product[img_url]"
            value={imgUrl}
            className="btn btn_clMain02 submitBtn"
            data-action="click->sending#submit"
            data-disable-with="出品する"
          ></input>
        </div>
      </form>
    </div>
  );
};
