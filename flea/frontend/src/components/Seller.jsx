import { React, useRef } from "react";

export const Seller = (props) => {
    return (
    <div className="sell_wrapper form_wrapper sell_input">
        <form id="sell_input" className="sell_list" data-controller="alert-page sending" action="/seller/products/listing/confirm" acceptCharset="UTF-8" method="post">
            <div className="sell_item">
                <h3 className="form_title is_required">
                    商品タイトル
                </h3>
                <p className="form_text form_text_12">
                    100文字まで入力できます
                </p>
                <div className="textarea_resize_wrap">
                    <textarea className="form_textarea height_104 is_seller limit50" maxLength="100" placeholder="商品の内容が伝わりやすいように、端的にまとめましょう。
                    例：【スニーカー】ナイキ　ジョーダン1" name="furima_product[title]" id="furima_product_title"></textarea>
                </div>
            </div>
            <div className="sell_item">
                <h3 className="form_title is_required">
                    商品の詳細
                </h3>
                <p className="form_text form_text_12">
                    1,000文字まで入力できます
                </p>
                <div className="textarea_resize_wrap">
                    <textarea className="form_textarea height_168 is_seller limit1000" maxLength="1100" placeholder="こだわりやアピールポイントなど、商品について詳しく説明しましょう。" name="furima_product[detail]" id="furima_product_detail"></textarea>
                </div>
            </div>
            <div className="sell_item">
                <h3 className="form_title is_required">
                    在庫数
                    </h3>
                <p className="form_text form_text_12">
                    半角数字で入力してください
                </p>
                <input className="form_input is_small is_seller only_num" maxLength="3" size="3" type="tel" name="furima_product[stock_count]" id="furima_product_stock_count"></input>
            </div>
            <div className="sell_item">
            <h3 className="form_title is_required">
                    商品価格
                </h3>
                <div className="input_price_wrap js_input_price">
                    <p className="form_text form_text_12">税込み価格を半角数字で入力してください。</p>
                    <input className="form_input is_small is_seller only_num" maxLength="7" size="7" type="tel" name="furima_product[price]" id="furima_product_price"></input>
                    <span className="unit">円</span>
                </div>

            </div>
            <div className="sell_btn_container">
                <input type="submit" name="commit" value="確認画面へ進む" className="btn btn_clMain02 submitBtn" data-action="click->sending#submit" data-disable-with="確認画面へ進む"></input>
</div>



            </form>
    </div>
      );
};
