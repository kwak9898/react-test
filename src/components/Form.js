import React from "react";
import "./Form.css";

const Form = ({ value, onChange, onCreate, onKeyPress }) => {
  return (
    <div className="form">
      <label className="title" for="product-name">
        제품명
      </label>
      <input type="text" id="product-name" />
      <label className="title" for="product-id">
        제품아이디
      </label>
      <input type="text" id="product-id" />
      <label className="title" for="product-price">
        가격
      </label>
      <input type="text" id="product-price" />
      <div className="create-button" onClick={onCreate}>
        추가
      </div>
    </div>
  );
};

export default Form;
