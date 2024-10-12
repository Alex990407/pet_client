import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import CartIconComponent from "../CartIconComponent";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [cartItemCount, setCartItemCount] = useState(0);

  const updateCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    setCartItemCount(totalItems);
  };

  useEffect(() => {
    updateCart();
  }, []);

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        color: "black",
        boxShadow: "none",
        borderBottom: "2px solid #ccc",
      }}
    >
      <Toolbar>
        <Box sx={{ cursor: "pointer" }} onClick={() => navigate("/")}>
          <img
            src={logo}
            alt="Logo"
            style={{ height: "40px", marginRight: "16px" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexGrow: 1,
            justifyContent: "center",
          }}
        >
          <Button color="inherit" onClick={() => navigate("/")}>
            Main Page
          </Button>
          <Button color="inherit" onClick={() => navigate("/categories")}>
            Categories
          </Button>
          <Button color="inherit" onClick={() => navigate("/allProducts")}>
            All Products
          </Button>
          <Button color="inherit" onClick={() => navigate("/allSales")}>
            All Sales
          </Button>
        </Box>
        <CartIconComponent cartItemCount={cartItemCount} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
