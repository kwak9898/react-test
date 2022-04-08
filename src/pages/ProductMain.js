import React, { Component } from "react";
import ProductList from "./ProductList";
import Form from "../components/Form";

class ProductMain extends Component {
  productNameChangeHandler = () => {
    // productName 필드 변경 될때 호출
  };

  productIdChangeHandler = () => {
    // productId 필드 변경 될때 호출
  };

  productPriceChangeHandler = () => {
    // productPrice 필드 변경 될때 호출
  };
  render() {
    return (
      <>
        <ProductList />
        <Form />
      </>
    );
  }
}

export default ProductMain;
