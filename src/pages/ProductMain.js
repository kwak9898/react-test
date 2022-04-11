import React, { Component } from "react";
import ProductList from "./ProductList";
import { productData } from "../Data";
import Form from "../components/Form";

class ProductMain extends Component {
  no = 6;

  state = {
    id: "",
    productName: "",
    price: "",
    productData: productData,
  };

  IdHandleChange = e => {
    this.setState({
      id: e.target.value,
    });
  };

  productNameHandleChange = e => {
    this.setState({
      productName: e.target.value,
    });
  };

  priceHandleChange = e => {
    this.setState({
      price: e.target.value,
    });
  };

  handleCreate = () => {
    const { id, productName, price, productData } = this.state;
    this.setState({
      id: "",
      productName: "",
      price: "",
      productData: productData.concat({
        no: this.no++,
        id: id,
        productName: productName,
        price: price,
      }),
    });
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.handleCreate();
    }
  };

  render() {
    const { id, productName, price, productData } = this.state;
    const {
      IdHandleChange,
      productNameHandleChange,
      priceHandleChange,
      handleCreate,
      handleKeyPress,
    } = this;
    return (
      <div className="poduct-name">
        <ProductList productData={productData} />
        <Form
          productNameValue={productName}
          idValue={id}
          priceValue={price}
          onKeyPress={handleKeyPress}
          onChange={
            (IdHandleChange, productNameHandleChange, priceHandleChange)
          }
          onCreate={handleCreate}
        />
      </div>
    );
  }
}

export default ProductMain;
