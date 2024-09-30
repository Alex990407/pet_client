import React from "react";
import { Box } from "@mui/material";
import homeImage from "../../assets/home_bg.png"; // Импортируем изображение

const Home = () => {
  return (
    <Box
      component="div"
      sx={{
        width: "100%", // На всю ширину
        height: "400px", // Задайте высоту на ваше усмотрение
        backgroundImage: `url(${homeImage})`,
        backgroundSize: "cover", // Изображение покрывает контейнер
        backgroundPosition: "center", // Центрируем изображение
        backgroundRepeat: "no-repeat", // Избегаем повторения изображения
      }}
    />
  );
};

export default Home;
