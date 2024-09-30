import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
} from "@mui/material";
import axios from "axios"; // Импортируем Axios

const CategoriesComponent = () => {
  const [categories, setCategories] = useState([]);

  // Запрос на бэкенд для получения данных о категориях
  useEffect(() => {
    axios
      .get("http://localhost:3333/categories/all")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  return (
    <Box sx={{ padding: 2 }}>
      {/* Заголовок Categories */}
      <Typography variant="h4" component="h1" gutterBottom>
        Categories
      </Typography>

      {/* Отображение категорий */}
      <Grid container spacing={2}>
        {categories.map((category) => (
          <Grid item key={category.id} xs={12} sm={6} md={3}>
            <Card sx={{ maxWidth: 200 }}>
              <CardMedia
                component="img"
                height="140"
                image={"http://localhost:3333/" + category.image} // URL изображения категории
                alt={category.title}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {category.title} {/* Название категории */}
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
