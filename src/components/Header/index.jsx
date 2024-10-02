import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import logo from "../../assets/logo.png";
import cartIcon from "../../assets/cartIcon.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white", // Устанавливаем белый цвет фона
        color: "black", // Устанавливаем цвет текста как черный
        boxShadow: "none", // Убираем тень, если необходимо
        borderBottom: "2px solid #ccc",
      }}
    >
      <Toolbar>
        {/* Логотип */}
        <img
          src={logo}
          alt="Логотип"
          style={{ height: "40px", marginRight: "16px" }}
        />

        {/* Навигационные ссылки */}
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
          <Button color="inherit" onClick={() => navigate("/сategories")}>
            Categories
          </Button>
          <Button color="inherit" onClick={() => navigate("/allProducts")}>
            All products
          </Button>
          <Button color="inherit" onClick={() => navigate("/allSales")}>
            All sales
          </Button>
        </Box>

        {/* Иконка корзины */}
        <Box
          component="img"
          src={cartIcon} // Используем иконку корзины
          alt="Cart"
          sx={{ height: 44, width: 48, cursor: "pointer" }} // Задаем размер и стиль
          onClick={() => navigate("/cart")} // Переход на страницу корзины
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
