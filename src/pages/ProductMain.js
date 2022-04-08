import React, { Component } from "react";
import ProductList from "./ProductList";
import Form from "../components/Form";

class ProductMain extends Component {
  id = 6;

  state = {
    productName: "",
    productId: "",
    productPrice: "",
  };

  productNameChangeHandler = e => {
    // productName 필드 변경 될때 호출
    this.setState({
      ...this.state,
      productName: e.target.value,
    });
  };

  productIdChangeHandler = e => {
    // productId 필드 변경 될때 호출
    this.setState({
      ...this.state,
      productId: e.target.value,
    });
  };

  productPriceChangeHandler = e => {
    // productPrice 필드 변경 될때 호출
    this.setState({
      ...this.state,
      productPrice: e.target.value,
    });
  };

  render() {
    return (
      <>
        <ProductList />
        <Form
          onProductNameChange={this.productNameChangeHandler}
          onProductIdChange={this.productIdChangeHandler}
          onProductPriceChange={this.productPriceChangeHandler}
          newProductName={this.state.productName}
          newProductId={this.state.productId}
          newProductPrice={this.state.productPrice}
        />
      </>
    );
  }
}

export default ProductMain;
