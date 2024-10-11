import React from "react";
import BreadcrumbsComponent from "../../components/BreadcrumbsComponent";
import AllProducts from "../../components/GetAllProductsComponent/index";

const Products = () => {
  return (
    <BreadcrumbsComponent>
      <AllProducts />
    </BreadcrumbsComponent>
  );
};

export default Products;
