import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Импортируем хук useNavigate
import notFoundImage from "../../assets/404.png";

const NotFound = () => {
  const navigate = useNavigate(); // Используем хук для навигации

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Занимаем всю высоту экрана
        textAlign: "center",
        backgroundColor: "white",
      }}
    >
      <Box
        component="img"
        src={notFoundImage} // Указываем путь к изображению
        alt="404 Not Found"
        sx={{
          width: { xs: "100%", sm: "300px" }, // Адаптивная ширина изображения
          marginBottom: "20px", // Отступ снизу
        }}
      />

      <Typography variant="h3" color="black">
        Page Not Found
      </Typography>
      <Typography
        variant="h6"
        color="textSecondary"
        sx={{ marginBottom: "20px" }}
      >
        We’re sorry, the page you requested could not be found. <br /> Please go
        back to the homepage.
      </Typography>
      <Button
        variant="contained"
        onClick={() => navigate("/")} // Навигация на главную страницу
        sx={{
          backgroundColor: "#0D50FF",
          color: "white",
          "&:hover": {
            backgroundColor: "#0056b3",
          },
        }}
      >
        Go Home
      </Button>
    </Box>
  );
};

export default NotFound;
