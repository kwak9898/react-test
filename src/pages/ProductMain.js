import React, { Component } from "react";
import ProductList from "./ProductList";
import { productList } from "../Data";
import Form from "../components/Form";

class ProductMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      productName: "",
      price: "",
      productList: productList,
    };
  }

  id = 6;

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
    const test = this.state;
    const newArr = test.productList.concat({
      no: test.productList.length + 1,
      id: test.id,
      productName: test.productName,
      price: test.price,
    });
    this.setState({ productList: newArr });
  };

  render() {
    return (
      <div className="poduct-name">
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
      </div>
    );
  }
}

export default ProductMain;
