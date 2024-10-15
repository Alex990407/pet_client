import React from "react";
import { Box, Typography } from "@mui/material";

// Компонент для отображения процентов скидки
const SaleDetailsBlockComponent = ({ price, discountPrice }) => {
  // Вычисляем процент скидки
  const discountPercentage = Math.round(
    ((price - discountPrice) / price) * 100
  );

  return (
    <Box
      sx={{
        width: "30px", // Уменьшенная ширина
        height: "18px", // Уменьшенная высота
        backgroundColor: "blue", // Синий фон
        color: "white", // Белый текст
        borderRadius: "5px", // Скругленные углы немного меньше
        padding: "2px 6px", // Уменьшенные внутренние отступы
        display: "inline-block", // Блок занимает только необходимое место
        textAlign: "center", // Центрируем текст
      }}
    >
      <Typography
        variant="body2" // Уменьшенный размер текста
        component="span"
        sx={{
          fontWeight: 700, // Жирный текст
          fontSize: "0.7rem", // Немного уменьшенный размер шрифта
          fontFamily: "Montserrat, sans-serif", // Шрифт
        }}
      >
        {discountPercentage}%
      </Typography>
    </Box>
  );
};

export default SaleDetailsBlockComponent;
