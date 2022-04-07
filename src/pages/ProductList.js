import React from "react";

const ProductList = props => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>아이디</th>
            <th>제품명</th>
            <th>가격</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>첫번째 아이디</td>
            <td>제품1</td>
            <td>10000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>두번째 아이디</td>
            <td>제품2</td>
            <td>10000</td>
          </tr>
          <tr>
            <td>3</td>
            <td>세번째 아이디</td>
            <td>제품3</td>
            <td>10000</td>
          </tr>
          <tr>
            <td>4</td>
            <td>네번째 아이디</td>
            <td>제품4</td>
            <td>10000</td>
          </tr>
          <tr>
            <td>5</td>
            <td>다섯번째 아이디</td>
            <td>제품5</td>
            <td>10000</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ProductList;
