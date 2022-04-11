const productData = [
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
];

const getProductNo = no => {
  const array = productData.filter(x => x.no == no);
  if (array.length == 1) {
    return array[0];
  }
  return null;
};

export { productData, getProductNo };
