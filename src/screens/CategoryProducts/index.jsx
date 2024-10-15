import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Typography } from "@mui/material";
import BreadcrumbsComponent from "../../components/BreadcrumbsComponent";
import CategoryProductsComponent from "../../components/CategoryProductsComponent";

const CategoryProducts = () => {
  const { id } = useParams(); // Получаем ID категории из URL
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Получаем данные о категории и продуктах с бэкенда
  useEffect(() => {
    const fetchCategoryAndProducts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3333/categories/${id}`
        );
        setCategory(response.data.category); // Устанавливаем данные о категории
        setProducts(response.data.data); // Устанавливаем данные о продуктах категории
        setLoading(false);
      } catch (err) {
        setError("Failed to load category and products");
        setLoading(false);
      }
    };

    fetchCategoryAndProducts();
  }, [id]);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <BreadcrumbsComponent categoryTitle={category?.title}>
      {/* Передаем данные о продуктах и категории в компонент */}
      <CategoryProductsComponent products={products} category={category} />
    </BreadcrumbsComponent>
  );
};

export default CategoryProducts;
