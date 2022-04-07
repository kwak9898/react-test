import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
      <CommonTable headersName={["제품번호", "아이디", "제품명", "가격"]}>
        {dataList
          ? dataList.map((item, index) => {
              return (
                <CommonTableRow key={index}>
                  <CommonTableColumn>{item.no}</CommonTableColumn>
                  <CommonTableColumn>{item.id}</CommonTableColumn>
                  <CommonTableColumn>
                    <Link to={`/productView/${item.no}`}>
                      {item.productName}
                    </Link>
                  </CommonTableColumn>
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
