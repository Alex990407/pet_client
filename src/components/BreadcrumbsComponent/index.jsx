import React from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";

// Создаем динамические хлебные крошки на основе пути
const BreadcrumbsComponent = ({ children, categoryTitle }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Разбиваем путь URL на части
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Box sx={{ padding: 2 }}>
      {/* Хлебные крошки */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center", // Центрируем элементы по вертикали
          gap: "2px", // Расстояние между элементами
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        {/* Начальная страница */}
        <Button
          variant="outlined"
          sx={{
            width: "120px",
            height: "36px",
            borderRadius: "6px",
            borderColor: "rgba(221, 221, 221, 1)",
            color: "black",
            textTransform: "none",
            fontSize: "14px",
            padding: "0",
            lineHeight: "36px",
            textAlign: "center",
          }}
          onClick={() => navigate("/")}
        >
          Main page
        </Button>

        {/* Динамическое отображение пути */}
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;

          return (
            <React.Fragment key={to}>
              {/* Линия-разделитель */}
              <Divider
                sx={{
                  flexGrow: 0,
                  width: "20px",
                  borderColor: "rgba(221, 221, 221, 1)",
                }}
              />

              {/* Кнопка хлебной крошки */}
              <Button
                variant="outlined"
                sx={{
                  width: "120px",
                  height: "36px",
                  borderRadius: "6px",
                  borderColor: "rgba(221, 221, 221, 1)",
                  color: "black",
                  textTransform: "none",
                  fontSize: "14px",
                  padding: "0",
                  lineHeight: "36px",
                  textAlign: "center",
                  whiteSpace: "nowrap", // Не переносить текст на новую строку
                  overflow: "hidden", // Обрезать текст, если он выходит за границы
                  textOverflow: "ellipsis", // Показать троеточие для обрезанного текста
                }}
                onClick={() => navigate(to)}
              >
                {/* Если это категория, показываем title вместо ID */}
                {index === pathnames.length - 1 && categoryTitle
                  ? categoryTitle
                  : value.charAt(0).toUpperCase() + value.slice(1)}
              </Button>
            </React.Fragment>
          );
        })}
      </Box>

      {/* Содержимое страницы */}
      {children}
    </Box>
  );
};

export default BreadcrumbsComponent;
