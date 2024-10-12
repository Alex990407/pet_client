import React from "react";
import { useParams } from "react-router-dom";
import BreadcrumbsComponent from "../../components/BreadcrumbsComponent";
import CategoryProductsComponent from "../../components/CategoryProductsComponent";

const CategoryProducts = () => {
  const { id } = useParams();

  return (
    <BreadcrumbsComponent>
      {/* Вызываем компонент CategoryProductsComponent + передаем ему id категории */}

      <CategoryProductsComponent id={id} />
    </BreadcrumbsComponent>
  );
};

export default CategoryProducts;
