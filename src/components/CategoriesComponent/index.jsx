import React, { useEffect, useState } from "react";
import { Typography, Card, CardMedia, CardContent, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Импортируем useNavigate
import axios from "axios"; // Импортируем Axios

const CategoriesComponent = ({ limit }) => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate(); // Инициализируем useNavigate

  // Запрос на бэкенд для получения данных о категориях
  useEffect(() => {
    axios
      .get("http://localhost:3333/categories/all")
      .then((response) => {
        const fetchedCategories = limit
          ? response.data.slice(0, limit)
          : response.data;
        setCategories(fetchedCategories);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, [limit]);

  // Обработчик клика на карточку категории
  const handleCategoryClick = (categoryId) => {
    navigate(`/category-products/${categoryId}`); // Переход на страницу с товарами категории
  };

  return (
    <Grid container spacing={2}>
      {categories.map((category) => (
        <Grid item key={category.id} xs={12} sm={6} md={3}>
          <Card
            sx={{
              boxShadow: "none",
              textAlign: "center",
              cursor: "pointer", // Добавляем указатель мыши, чтобы показать кликабельность
            }}
            onClick={() => handleCategoryClick(category.id)} // Добавляем обработчик клика
          >
            <CardMedia
              component="img"
              image={"http://localhost:3333/" + category.image} // URL изображения категории
              alt={category.title}
              sx={{
                height: "350px",
                width: "315px",
                borderRadius: "8px",
                objectFit: "contain",
                objectPosition: "center",
                margin: "0 auto",
                backgroundColor: "#f0f0f0",
              }}
            />
            <CardContent>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 500,
                  fontSize: "1rem",
                  marginTop: "10px",
                }}
              >
                {category.title}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CategoriesComponent;
