import React from "react";
import "./Form.css";

const Form = props => {
  return (
    <div className="form">
      <label className="title" for="product-name">
        제품명
      </label>
      <input
        type="text"
        id="product-name"
        onChange={props.onProductNameChange}
      />
      <label className="title" for="product-id">
        제품아이디
      </label>
      <input type="text" id="product-id" onChange={props.onProductIdChange} />
      <label className="title" for="product-price">
        가격
      </label>
      <input
        type="text"
        id="product-price"
        onChange={props.onProductPriceChange}
      />
      <div className="create-button">추가</div>
    </div>
  );
};

export default Form;
