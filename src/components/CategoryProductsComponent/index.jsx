import React, { useEffect, useState } from "react";
import { Typography, Card, CardMedia, CardContent, Grid } from "@mui/material";
import axios from "axios";
import SaleDetailsBlockComponent from "../SaleDetailsBlockComponent";

const CategoryProductsComponent = ({ id, limit }) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

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
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });

    // console.log(products);
  }, [id, limit]);

  console.log(products);
  return (
    <Grid container spacing={2}>
      <Typography
        variant="h1"
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
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={3}>
          <Card
            sx={{
              boxShadow: "none",
              textAlign: "center",
            }}
          >
            {/* Компонент со скидкой */}
            {product.discont_price && (
              <SaleDetailsBlockComponent
                price={product.price}
                discountPrice={product.discont_price}
                sx={{
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                  zIndex: 1, // Устанавливаем z-index, чтобы он был поверх других элементов
                }}
              />
            )}

            <CardMedia
              component="img"
              image={"http://localhost:3333/" + product.image} // URL изображения продукта
              alt={product.title}
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
                {/* Если есть цена со скидкой, показываем обе цены */}
                {product.discont_price ? (
                  <>
                    <span
                      style={{
                        textDecoration: "line-through", // Перечёркиваем обычную цену
                        marginRight: "8px", // Отступ между ценами
                        color: "#888", // Делаем перечёркнутую цену серой
                      }}
                    >
                      ${product.price}
                    </span>
                    <span style={{ color: "#ff0000" }}>
                      {" "}
                      {/* Красный цвет для цены со скидкой */}$
                      {product.discont_price}
                    </span>
                  </>
                ) : (
                  // Если цены со скидкой нет, показываем обычную цену
                  <>${product.price}</>
                )}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CategoryProductsComponent;
