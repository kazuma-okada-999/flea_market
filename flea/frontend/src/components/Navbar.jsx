import React from "react";
import { Upload } from "./Upload";

export const Navbar = (props) => {
  const { moveHome, refresh } = props;

  return (
    <div className="navbar">
      <h1 className="navbar-header" onClick={() => moveHome("AllPhotos")}>
        おすすめ
      </h1>
      <div id="header_search_area" className="pc_only">
        <form
          id="serviceSearchForm"
          className="serviceSearchForm"
          action="/search"
          acceptCharset="UTF-8"
          method="get"
        >
          <input
            id="hiddenCategoryId"
            autoComplete="off"
            type="hidden"
            name="category_id"
          ></input>
          <input
            value=""
            id="hiddenMemberStatus"
            autoComplete="off"
            type="hidden"
            name="member_status"
          ></input>
          <input
            value=""
            id="hiddenSort"
            autoComplete="off"
            type="hidden"
            name="sort_key"
          ></input>
          <input
            id="hiddenSellerUid"
            autoComplete="off"
            type="hidden"
            name="seller_uid"
          ></input>
          <input
            id="hiddenMinPrice"
            autoComplete="off"
            type="hidden"
            name="min_price"
          ></input>
          <input
            id="hiddenMaxPrice"
            autoComplete="off"
            type="hidden"
            name="max_price"
          ></input>
          <input
            id="hiddenNowOnSale"
            autoComplete="off"
            type="hidden"
            name="now_on_sale"
          ></input>
          <input
            id="hiddenShippingIncluded"
            autoComplete="off"
            type="hidden"
            name="shipping_included"
          ></input>
          <input
            type="search"
            id="keyword"
            name="keyword"
            placeholder="検索キーワード（商品/出品者名など）を入力"
            value=""
            data-action="keydown.enter->product-list-filter#searchProducts"
          ></input>
          <span className="bg">
            <input
              type="button"
              className="submitBtn fa"
              value="検索する"
              data-action="click->product-list-filter#searchProducts"
              aria-hidden="true"
            ></input>
          </span>
        </form>
      </div>
      <Upload refresh={refresh} />
    </div>
  );
};
