import React, { Component } from "react";
import ProductList from "./ProductList";
import { productList } from "../Data";
import Form from "../components/Form";

class ProductMain extends Component {
  id = 6;

  state = {
    productName: "",
    productId: "",
    productPrice: "",
    productList: productList,
  };

  productNameChangeHandler = e => {
    this.setState({
      ...this.state,
      productName: e.target.value,
    });
  };

  productIdChangeHandler = e => {
    this.setState({
      ...this.state,
      productId: e.target.value,
    });
  };

  productPriceChangeHandler = e => {
    this.setState({
      ...this.state,
      productPrice: e.target.value,
    });
  };

  onAddHandler = () => {
    const newArr = this.state.productList.concat({
      no: this.state.productList.length + 1,
      id: this.state.id,
      productName: this.state.productName,
      price: this.state.price,
    });
    this.setState({ productList: newArr });
  };

  render() {
    return (
      <>
        <ProductList productList={this.state.productList} />
        <Form
          onProductNameChange={this.productNameChangeHandler}
          onProductIdChange={this.productIdChangeHandler}
          onProductPriceChange={this.productPriceChangeHandler}
          newProductName={this.state.productName}
          newProductId={this.state.productId}
          newProductPrice={this.state.productPrice}
          onAdd={this.onAddHandler}
        />
      </>
    );
  }
}

export default ProductMain;
