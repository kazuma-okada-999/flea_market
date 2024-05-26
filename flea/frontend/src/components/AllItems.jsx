import React from "react";

export const AllItems = (props) => {
  const { items, handleClick } = props;
  console.log(items);
  return (
    <div className="productList">
      {items.map((itemObj, index) => (
        <section key={index} className="productBox">
          <a>
            <div className="detail">
              <div className="img_wrap">
                <img />
                <div className="priceBox">
                  <span className="txt_price">{itemObj.sell_price}</span>
                </div>
              </div>
              <div className='inner'>
                <h3 className='caption'>{itemObj.item}</h3>
              </div>
            </div>
          </a>
        </section>
      ))}
    </div>
  );
};
