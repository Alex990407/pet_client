import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const BreadcrumbsComponent = ({ children, categoryTitle }) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ padding: 2 }}>
      <Box
        sx={{
          display: "flex",
          gap: "20px", // Расстояние между кнопками
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        <Button
          variant="outlined" // Контурная кнопка
          sx={{
            width: "120px", // Ширина кнопки
            height: "36px", // Высота кнопки
            borderRadius: "6px", // Закругленные углы
            borderColor: "rgba(221, 221, 221, 1)", // Цвет бордера
            color: "black", // Цвет текста кнопки
            textTransform: "none", // Отключение uppercase
            fontSize: "14px", // Размер текста для корректного отображения
            padding: "0", // Убираем лишние внутренние отступы
            lineHeight: "36px", // Выравниваем текст по высоте кнопки
            textAlign: "center", // Центрируем текст по горизонтали
          }}
          onClick={() => navigate("/")} // Переход на главную страницу
        >
          Main page
        </Button>
        <Link to="/categories">
          <Button
            variant="outlined"
            sx={{
              width: "120px", // Ширина кнопки
              height: "36px", // Высота кнопки
              borderRadius: "6px", // Закругленные углы
              borderColor: "rgba(221, 221, 221, 1)", // Цвет бордера
              color: "black", // Цвет текста кнопки
              textTransform: "none", // Отключение uppercase
              fontSize: "14px", // Размер текста для корректного отображения
              padding: "0", // Убираем лишние внутренние отступы
              lineHeight: "36px", // Выравниваем текст по высоте кнопки
              textAlign: "center", // Центрируем текст по горизонтали
            }}
          >
            Categories
          </Button>
        </Link>
      </Box>
      {/* Название текущей категории под кнопками */}

      {/* Заголовок Categories */}

      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: "bold", // Используем bold для жирного текста
          fontSize: "2rem",
          marginBottom: "20px", // Отступ снизу для заголовка
          textAlign: "left", // Выровняем по левому краю
        }}
      >
        {categoryTitle}
      </Typography>

      {children}
    </Box>
  );
};

export default BreadcrumbsComponent;
