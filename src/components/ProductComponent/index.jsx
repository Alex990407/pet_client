import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Box,
  Divider,
  IconButton,
  TextField,
} from "@mui/material";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const ProductComponent = ({ productId, updateCart }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1); // Состояние для количества

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3333/products/${productId}`
        );
        setProduct(response.data[0]);
        setLoading(false);
      } catch (err) {
        setError("Failed to load product data");
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

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

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

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

            {/* Цена со скидкой */}
            <Box display="flex" alignItems="center" marginY={2}>
              {product.discont_price ? (
                <>
                  <Typography variant="h5" fontWeight="bold" color="primary">
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
                <Typography variant="h5" fontWeight="bold" color="primary">
                  ${product.price}
                </Typography>
              )}
            </Box>

            {/* Количество */}
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
            </Box>

            <Divider />

            <Typography variant="body1" marginTop={2}>
              {product.description}
            </Typography>

            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ marginTop: 3 }}
              onClick={handleAddToCart} // Добавляем товар в корзину
            >
              Add {quantity} to Cart
            </Button>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProductComponent;
