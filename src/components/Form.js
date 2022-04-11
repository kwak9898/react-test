import React from "react";
import "./Form.css";

const Form = ({ productName, id, price, onChange, onCreate }) => {
  return (
    <div className="form">
      <label className="title" htmlFor="product-name">
        제품명
      </label>
      <input
        type="text"
        name="productName"
        id="product-name"
        value={productName}
        onChange={onChange}
      />
      <label className="title" htmlFor="product-id">
        제품아이디
      </label>
      <input
        type="text"
        name="id"
        id="product-id"
        value={id}
        onChange={onChange}
      />
      <label className="title" htmlFor="product-price">
        가격
      </label>
      <input
        type="text"
        name="price"
        id="product-price"
        value={price}
        onChange={onChange}
      />
      <div className="create-button" onClick={onCreate}>
        추가
      </div>
    </div>
  );
};

export default Form;
