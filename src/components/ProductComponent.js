import React from "react";
const ProductComponent = ({ id, title, price, category }) => {
  return (
    <div className="four column wide">
      <div className="ui link cards">
        <div className="card">
          <div className="image"></div>
          <div className="content">
            <div className="header">{title}</div>
            <div className="meta price">$ {price}</div>
            <div className="meta">{category}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
