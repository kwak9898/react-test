import React from "react";
import "./Form.css";

const Form = ({ value, onChange, onCreate, onKeyPress }) => {
  return (
    <div className="form">
      <label className="title" htmlFor="product-name">
        제품명
      </label>
      <input
        type="text"
        id="product-name"
        value={value}
        onChange={onChange}
        onCreate={onCreate}
      />
      <label className="title" htmlFor="product-id">
        제품아이디
      </label>
      <input
        type="text"
        id="product-id"
        value={value}
        onChange={onChange}
        onCreate={onCreate}
      />
      <label className="title" htmlFor="product-price">
        가격
      </label>
      <input
        type="text"
        id="product-price"
        value={value}
        onChange={onChange}
        onCreate={onCreate}
      />
      <div className="create-button" onClick={onKeyPress}>
        추가
      </div>
    </div>
  );
};

export default Form;
