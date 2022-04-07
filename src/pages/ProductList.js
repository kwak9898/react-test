import React, { useState, useEffect } from "react";
import CommonTable from "../components/CommonTable";
import CommonTableColumn from "../components/CommonTableColumn";
import CommonTableRow from "../components/CommonTableRow";
import { productList } from "../Data";

const ProductList = props => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    setDataList(productList);
  }, []);

  return (
    <>
      <CommonTable headersName={["글번호", "제목", "등록일", "조회수"]}>
        {dataList
          ? dataList.map((item, index) => {
              return (
                <CommonTableRow key={index}>
                  <CommonTableColumn>{item.no}</CommonTableColumn>
                  <CommonTableColumn>{item.id}</CommonTableColumn>
                  <CommonTableColumn>{item.productName}</CommonTableColumn>
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
