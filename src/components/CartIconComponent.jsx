import React from "react";
import { Box, Badge } from "@mui/material";
import cartIcon from "../assets/cartIcon.svg";
import { useNavigate } from "react-router-dom";

// Компонент для иконки корзины
const CartIconComponent = ({ cartItemCount }) => {
  const navigate = useNavigate();

  console.log("ALEXXXX");
  console.log(cartItemCount);
  return (
    <Box
      sx={{ position: "relative", cursor: "pointer" }}
      onClick={() => navigate("/cart")} // Переход на страницу корзины
    >
      <Badge
        badgeContent={cartItemCount} // Количество товаров в корзине
        color="primary"
      >
        <Box
          component="img"
          src={cartIcon}
          alt="Cart"
          sx={{ height: 44, width: 48 }}
        />
      </Badge>
    </Box>
  );
};

export default CartIconComponent;
