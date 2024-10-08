import React, { useEffect, useState } from "react";
import { Typography, Card, CardMedia, CardContent, Grid } from "@mui/material";
import axios from "axios";

const CategoryProductsComponent = ({ id, limit }) => {
  const [products, setProducts] = useState([]);

  // Запрос на бэкенд для получения продуктов по категории
  useEffect(() => {
    axios
      .get(`http://localhost:3333/categories/${id}`) // Используем id для запроса продуктов категории
      .then((response) => {
        const fetchedProducts = limit
          ? response.data.products.slice(0, limit)
          : response.data.products;
        setProducts(fetchedProducts); // Сохраняем продукты в состоянии
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });

    console.log(products);
  }, [id, limit]);

  return;
  //(
  // <Grid container spacing={2}>
  //   {products.map((product) => (
  //     <Grid item key={product.id} xs={12} sm={6} md={3}>
  //       <Card
  //         sx={{
  //           boxShadow: "none",
  //           textAlign: "center",
  //         }}
  //       >
  //         <CardMedia
  //           component="img"
  //           image={"http://localhost:3333/" + product.image} // URL изображения продукта
  //           alt={product.title}
  //           sx={{
  //             height: "350px",
  //             width: "315px",
  //             borderRadius: "8px",
  //             objectFit: "contain",
  //             objectPosition: "center",
  //             margin: "0 auto",
  //             backgroundColor: "#f0f0f0",
  //           }}
  //         />
  //         <CardContent>
  //           <Typography
  //             variant="h6"
  //             component="div"
  //             sx={{
  //               fontFamily: "Montserrat, sans-serif",
  //               fontWeight: 500,
  //               fontSize: "1rem",
  //               marginTop: "10px",
  //             }}
  //           >
  //             {product.title}
  //           </Typography>
  //         </CardContent>
  //       </Card>
  //     </Grid>
  //   ))}
  // </Grid>
  // );
};

export default CategoryProductsComponent;
