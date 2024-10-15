import React, { useState } from "react";
import {
  Grid,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Box,
  IconButton,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import SaleDetailsBlockComponent from "../../components/SaleDetailsBlockComponent/index"; // Импортируем компонент для отображения процентов скидки

const ProductComponent = ({ product, updateCart }) => {
  const [quantity, setQuantity] = useState(1); // Состояние для количества

  // Увеличиваем или уменьшаем количество товаров
  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  // Добавляем товар в корзину
  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex >= 0) {
      cart[existingProductIndex].quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("Товар добавлен в корзину, вызываем updateCart");
    updateCart(); // Обновляем отображение корзины
  };

  return (
    <Card sx={{ display: "flex", padding: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={5}>
          <CardMedia
            component="img"
            height="auto"
            image={`http://localhost:3333/${product.image}`}
            alt={product.title}
          />
        </Grid>
        <Grid item xs={12} sm={7}>
          <CardContent>
            <Typography variant="h4" fontWeight="bold">
              {product.title}
            </Typography>

            {/* Цена со скидкой в одном контейнере */}
            <Box display="flex" alignItems="center" marginY={2}>
              <Box display="flex" alignItems="flex-end">
                {product.discont_price ? (
                  <>
                    <Typography variant="h4" fontWeight="bold" color="black">
                      ${product.discont_price}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      sx={{
                        textDecoration: "line-through",
                        marginLeft: 1,
                        fontSize: "1.2rem",
                      }}
                    >
                      ${product.price}
                    </Typography>
                  </>
                ) : (
                  <Typography variant="h5" fontWeight="bold" color="black">
                    ${product.price}
                  </Typography>
                )}
              </Box>
              {/* Добавляем компонент SaleDetailsBlockComponent */}
              {product.discont_price && (
                <Box sx={{ marginLeft: "8px", marginBottom: 1 }}>
                  {" "}
                  {/* Поднимаем SaleDetailsBlockComponent немного выше */}
                  <SaleDetailsBlockComponent
                    price={product.price}
                    discountPrice={product.discont_price}
                  />
                </Box>
              )}
            </Box>

            {/* Блок с количеством и кнопкой */}
            <Box display="flex" alignItems="center" marginY={2}>
              <IconButton onClick={handleDecrease} disabled={quantity <= 1}>
                <RemoveIcon />
              </IconButton>
              <TextField
                value={quantity}
                inputProps={{ readOnly: true, style: { textAlign: "center" } }}
                sx={{ width: "60px", marginX: 1 }}
              />
              <IconButton onClick={handleIncrease}>
                <AddIcon />
              </IconButton>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ marginLeft: 3 }}
                onClick={handleAddToCart}
              >
                Add {quantity} to Cart
              </Button>
            </Box>

            {/* Заголовок "Description" и описание продукта */}
            <Box
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              marginTop={2}
            >
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "600",
                  marginBottom: 0,
                }}
              >
                Description
              </Typography>
              <Typography
                variant="body1"
                marginTop={0}
                sx={{ marginTop: "4px" }}
              >
                {product.description}
              </Typography>
            </Box>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProductComponent;
