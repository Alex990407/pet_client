import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import logo from "../../assets/logo.png";
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
            Главная
          </Button>
          <Button color="inherit" onClick={() => navigate("/сategories")}>
            Categories
          </Button>
          <Button color="inherit" onClick={() => navigate("/products")}>
            Products
          </Button>
        </Box>

        {/* Кнопка Войти */}
        <Button color="inherit">Войти</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
