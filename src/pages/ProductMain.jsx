import React, { useRef, useState } from "react";
import ProductList from "./ProductList";
import { productData } from "../Data";
import Form from "../components/Form";

export default function ProductMain() {
  const [input, setInput] = useState({
    productName: "",
    id: "",
    price: "",
  });

  const { productName, id, price } = input;

  const onChange = e => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const [data, setData] = useState([
    {
      no: 1,
      id: "첫번째 아이디",
      productName: "제품1",
      price: "10000",
    },
    {
      no: 2,
      id: "두번째 아이디",
      productName: "제품2",
      price: "10000",
    },
    {
      no: 3,
      id: "세번째 아이디",
      productName: "제품3",
      price: "10000",
    },
    {
      no: 4,
      id: "네번째 아이디",
      productName: "제품4",
      price: "10000",
    },
    {
      no: 5,
      id: "다섯번째 아이디",
      productName: "제품5",
      price: "10000",
    },
  ]);

  const nextNo = useRef(6);

  const onCreate = () => {
    const product = {
      no: nextNo.current,
      productName,
      id,
      price,
    };
    setData([...data, product]);
    setInput({
      id: "",
      productName: "",
      price: "",
    });
    nextNo.current += 1;
  };

  return (
    <>
      <ProductList productData={data} />
      <Form
        id={id}
        productName={productName}
        price={price}
        onChange={onChange}
        onCreate={onCreate}
      />
    </>
  );
}
