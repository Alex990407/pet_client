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
import SaleDetailsBlockComponent from "../SaleDetailsBlockComponent";
import ProductFilterComponent from "../ProductFilterComponent"; // Импортируем компонент фильтрации

const CategoryProductsComponent = ({ id, limit }) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Запрос на бэкенд для получения продуктов по категории
  useEffect(() => {
    axios
      .get(`http://localhost:3333/categories/${id}`) // Используем id для запроса продуктов категории
      .then((response) => {
        const fetchedCategory = limit
          ? response.data.category.slice(0, limit)
          : response.data.category;

        setCategory(fetchedCategory);

        const fetchedProducts = limit
          ? response.data.data.slice(0, limit)
          : response.data.data;

        setProducts(fetchedProducts); // Сохраняем продукты в состоянии
        setFilteredProducts(fetchedProducts); // Инициализируем отфильтрованные продукты
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });

    // console.log(products);
  }, [id, limit]);

  // Функция фильтрации
  const handleFilter = (filters) => {
    let filtered = products;

    // Фильтр по ценам
    if (filters.priceFrom !== null) {
      filtered = filtered.filter(
        (product) => product.price >= filters.priceFrom
      );
    }
    if (filters.priceTo !== null) {
      filtered = filtered.filter((product) => product.price <= filters.priceTo);
    }

    // Фильтр по скидкам
    if (filters.showDiscounted) {
      filtered = filtered.filter((product) => product.discont_price);
    }

    // Сортировка
    if (filters.sortOrder) {
      filtered = filtered.sort((a, b) => {
        switch (filters.sortOrder) {
          case "priceAsc":
            return a.price - b.price;
          case "priceDesc":
            return b.price - a.price;
          case "discountAsc":
            return (a.discont_price || 0) - (b.discont_price || 0);
          case "discountDesc":
            return (b.discont_price || 0) - (a.discont_price || 0);
          default:
            return 0;
        }
      });
    }

    setFilteredProducts(filtered); // Обновляем состояние отфильтрованных продуктов
  };

  return (
    <Box sx={{ padding: { xs: "10px", sm: "20px" } }}>
      {/* Заголовок категории вынесен над продуктами */}
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
        {category.title}
      </Typography>
      {/* Добавляем компонент фильтрации */}
      <ProductFilterComponent onFilter={handleFilter} /> {/* Сетка продуктов */}
      <Grid container spacing={2}>
        {filteredProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={3} lg={3}>
            <Card
              sx={{
                width: "100%", // Карточка адаптируется к размеру сетки
                height: "100%",
                borderRadius: "12px",
                border: "1px solid rgba(221, 221, 221, 1)",
                boxShadow: "none",
                textAlign: "center",
                position: "relative", // Позиционируем карточку
              }}
            >
              {/* Компонент со скидкой */}
              {product.discont_price && (
                <Box
                  sx={{
                    position: "absolute", // Позволяет позиционировать элемент
                    top: "16px", // Отступ сверху
                    right: "16px", // Отступ справа
                    zIndex: 1, // Скидка поверх контента
                  }}
                >
                  <SaleDetailsBlockComponent
                    price={product.price}
                    discountPrice={product.discont_price}
                  />
                </Box>
              )}

              <CardMedia
                component="img"
                image={"http://localhost:3333/" + product.image}
                alt={product.title}
                sx={{
                  width: "100%", // Ширина карточки
                  height: { xs: "200px", sm: "220px", md: "240px" }, // Уменьшенные размеры изображения
                  borderRadius: "8px",
                  objectFit: "cover",
                  objectPosition: "center",
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
                  {product.title}
                </Typography>

                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 500,
                    fontSize: "1rem",
                    marginTop: "5px",
                    textAlign: "left",
                  }}
                >
                  {product.discont_price ? (
                    <>
                      <span
                        style={{
                          textDecoration: "line-through",
                          marginRight: "8px",
                          color: "#888",
                        }}
                      >
                        ${product.price}
                      </span>
                      <span style={{ color: "#ff0000" }}>
                        ${product.discont_price}
                      </span>
                    </>
                  ) : (
                    <>${product.price}</>
                  )}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoryProductsComponent;
