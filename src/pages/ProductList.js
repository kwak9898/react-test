import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CommonTable from "../components/CommonTable";
import CommonTableColumn from "../components/CommonTableColumn";
import CommonTableRow from "../components/CommonTableRow";
import { productData } from "../Data";

const ProductList = props => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    setDataList(productData);
  }, []);

  return (
    <>
      <CommonTable headersName={["제품번호", "제품명", "제품아이디", "가격"]}>
        {props.productData
          ? props.productData.map((item, no) => {
              return (
                <CommonTableRow key={no}>
                  <CommonTableColumn>{item.no}</CommonTableColumn>
                  <CommonTableColumn>
                    <Link to={`/item/${item.no}`}>{item.productName}</Link>
                  </CommonTableColumn>
                  <CommonTableColumn>{item.id}</CommonTableColumn>
                  <CommonTableColumn>{item.price}</CommonTableColumn>
                </CommonTableRow>
              );
            })
          : ""}
      </CommonTable>
    </>
  );
};

export default ProductList;
