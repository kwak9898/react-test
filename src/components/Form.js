import React from "react";
import "./Form.css";

const Form = props => {
  return (
    <div>
      <fieldset>
        <legend>제품</legend>
        <label for="id">제품명</label>
        <input type="text" id="product-name" />
        <br />
        <label for="id">제품아이디</label>
        <input type="text" id="id" />
        <br />
        <label for="id">가격</label>
        <input type="text" id="price" />
        <br />
      </fieldset>
    </div>
  );
};

export default Form;
