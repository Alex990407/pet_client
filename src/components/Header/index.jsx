import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu"; // Убедитесь, что этот импорт работает
import { Box } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* Иконка меню */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        {/* Название сайта или логотип */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Мой Логотип
        </Typography>

        {/* Навигационные ссылки */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="inherit" href="/">
            Главная
          </Button>
          <Button color="inherit" href="/about">
            О нас
          </Button>
          <Button color="inherit" href="/services">
            Услуги
          </Button>
          <Button color="inherit" href="/contact">
            Контакты
          </Button>
        </Box>

        {/* Кнопка Войти */}
        <Button color="inherit">Войти</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
