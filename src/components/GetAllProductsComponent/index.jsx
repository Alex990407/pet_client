import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import axios from "axios";
import SaleDetailsBlockComponent from "../../components/SaleDetailsBlockComponent"; // Компонент скидки
import ProductFilterComponent from "../ProductFilterComponent";
import { useNavigate } from "react-router-dom";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); // Состояние для отфильтрованных продуктов
  const navigate = useNavigate();

  // Запрос на бэкенд для получения всех продуктов

  useEffect(() => {
    axios
      .get("http://localhost:3333/products/all") // Путь к вашему API для получения всех продуктов
      .then((response) => {
        setProducts(response.data); // Сохраняем полученные данные в состоянии
        setFilteredProducts(response.data); // Инициализируем отфильтрованные продукты
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

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

    // Сортировка
    if (filters.sortOrder) {
      filtered = filtered.sort((a, b) => {
        switch (filters.sortOrder) {
          case "priceAsc":
            return a.price - b.price;
          case "priceDesc":
            return b.price - a.price;
          default:
            return 0;
        }
      });
    }

    setFilteredProducts(filtered); // Обновляем состояние отфильтрованных продуктов
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <Box sx={{ padding: { xs: "10px", sm: "20px" } }}>
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
        All Products
      </Typography>

      {/* Добавляем компонент фильтрации */}
      <ProductFilterComponent onFilter={handleFilter} />

      {/* Сетка продуктов */}
      <Grid container spacing={2}>
        {products.map((product) => (
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
                cursor: "pointer",
              }}
              onClick={() => handleProductClick(product.id)} // Добавляем обработчик клика
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

export default AllProducts;
