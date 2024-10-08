import React, { useEffect } from "react";
import { Box, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom"; // Импортируем useParams
import BreadcrumbsComponent from "../../components/BreadcrumbsComponent";
import CategoryProductsComponent from "../../components/CategoryProductsComponent";

const CategoryProducts = () => {
  const { id } = useParams(); // Получаем id из параметров маршрута

  return (
    <BreadcrumbsComponent>
      {/* Вызываем компонент CategoryProductsComponent + передаем ему id категории */}

      <CategoryProductsComponent id={id} />
    </BreadcrumbsComponent>
  );
};

export default CategoryProducts;
