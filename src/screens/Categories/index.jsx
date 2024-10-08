import React from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CategoriesComponent from "../../components/CategoriesComponent";
import BreadcrumbsComponent from "../../components/BreadcrumbsComponent";

const Categories = () => {
  return (
    <BreadcrumbsComponent>
      {/* Контейнер для кнопок */}

      <CategoriesComponent />
    </BreadcrumbsComponent>
  );
};

export default Categories;
