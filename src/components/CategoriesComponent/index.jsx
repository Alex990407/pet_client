import React, { useEffect, useState } from "react";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Box,
} from "@mui/material";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const CategoriesComponent = ({ limit }) => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  // Запрос на бэкенд для получения данных о категориях
  useEffect(() => {
    axios
      .get("http://localhost:3333/categories/all")
      .then((response) => {
        // Если передан лимит, отрезаем массив до нужного количества категорий
        const fetchedCategories = limit
          ? response.data.slice(0, limit)
          : response.data;
        setCategories(fetchedCategories);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, [limit]);

  // Функция для перехода на страницу с продуктами категории
  const handleCategoryClick = (categoryId) => {
    navigate(`/category-products/${categoryId}`); // Переход на страницу с параметром categoryId
  };

  return (
    <Box sx={{ padding: "20px" }}>
      {/* Заголовок страницы */}
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: "bold",
          fontSize: { xs: "1.5rem", sm: "2rem" }, // Адаптивный заголовок
          marginBottom: "20px",
          textAlign: "left",
        }}
      >
        Categories
      </Typography>

      {/* Сетка с категориями */}
      <Grid container spacing={2}>
        {categories.map((category) => (
          <Grid item key={category.id} xs={12} sm={6} md={3}>
            <Card
              sx={{
                boxShadow: "none", // Убираем границы и тени
                textAlign: "center", // Центрируем содержимое
                cursor: "pointer",
              }}
              onClick={() => handleCategoryClick(category.id)} // Добавляем обработчик клика
            >
              <CardMedia
                component="img"
                image={"http://localhost:3333/" + category.image} // URL изображения категории
                alt={category.title}
                sx={{
                  borderRadius: "8px",
                  objectFit: "contain", // Изображение не обрезается и полностью вмещается
                  objectPosition: "center", // Центрируем изображение
                  margin: "0 auto", // Центрируем элемент
                  backgroundColor: "#f0f0f0", // Цвет фона
                  maxHeight: "350px", // Ограничиваем максимальную высоту
                  width: "100%",
                }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontFamily: "Montserrat, sans-serif", // Применяем шрифт
                    fontWeight: 500, // Устанавливаем Medium вес шрифта
                    fontSize: "1rem", // Размер текста
                    marginTop: "10px", // Отступ сверху
                  }}
                >
                  {category.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoriesComponent;
