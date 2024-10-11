import React from "react";
import BreadcrumbsComponent from "../../components/BreadcrumbsComponent";
import DiscountedProducts from "../../components/DiscountedProductsComponent/index";

const AllSales = () => {
  return (
    <BreadcrumbsComponent>
      <DiscountedProducts />
    </BreadcrumbsComponent>
  );
};

export default AllSales;
