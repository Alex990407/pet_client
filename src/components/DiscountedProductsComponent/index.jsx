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
import { useNavigate } from "react-router-dom";
import SaleDetailsBlockComponent from "../../components/SaleDetailsBlockComponent"; // Компонент для отображения скидки
import ProductFilterComponent from "../ProductFilterComponent";

const DiscountedProducts = ({ showFilter = true, limit, hideTitle }) => {
  const [discountedProducts, setDiscountedProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); // Состояние для отфильтрованных продуктов

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3333/products/all") // Замените на ваш маршрут, если нужно
      .then((response) => {
        // Фильтруем продукты, чтобы оставить только со скидкой
        const discounted = response.data.filter(
          (product) => product.discont_price
        );
        setDiscountedProducts(discounted);
        setFilteredProducts(discounted); // Инициализируем отфильтрованные продукты
      })
      .catch((error) => {
        console.error("Error fetching discounted products:", error);
      });
  }, []);

  // Функция фильтрации
  const handleFilter = (filters) => {
    let filtered = discountedProducts;

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

  // Ограничиваем количество отображаемых продуктов
  const displayedProducts = limit
    ? filteredProducts.slice(0, limit)
    : filteredProducts;

  // Функция для навигации по продукту при клике
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`); // Переход на страницу продукта
  };

  return (
    <Box sx={{ padding: { xs: "10px", sm: "20px" } }}>
      {!hideTitle && (
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "bold",
            fontSize: { xs: "1.5rem", sm: "2rem" },
            marginBottom: "20px",
            textAlign: "left",
          }}
        >
          Discounted items
        </Typography>
      )}

      {/* Добавляем компонент фильтрации */}
      {/* Условный рендеринг фильтра */}
      {showFilter && <ProductFilterComponent onFilter={handleFilter} />}

      <Grid container spacing={2}>
        {displayedProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={3} lg={3}>
            <Card
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "12px",
                border: "1px solid rgba(221, 221, 221, 1)",
                boxShadow: "none",
                textAlign: "center",
                position: "relative",
                cursor: "pointer",
              }}
              onClick={() => handleProductClick(product.id)} // Добавляем обработчик клика
            >
              {product.discont_price && (
                <Box
                  sx={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    zIndex: 1,
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
                  width: "100%",
                  height: { xs: "200px", sm: "220px", md: "240px" },
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

export default DiscountedProducts;
