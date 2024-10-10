import React from "react";
import { Box, Typography } from "@mui/material";

// Компонент для отображения процентов скидки
const SaleDetailsBlockComponent = ({ price, discountPrice }) => {
  console.log(price);
  // Вычисляем процент скидки
  const discountPercentage = Math.round(
    ((price - discountPrice) / price) * 100
  );

  return (
    <Box
      sx={{
        width: "45px",
        height: "25px",
        backgroundColor: "blue", // Синий фон
        color: "white", // Белый текст
        borderRadius: "6px", // Скругленные углы
        padding: "8px 16px", // Внутренние отступы
        display: "inline-block", // Блок занимает только необходимое место
        textAlign: "center", // Центрируем текст
      }}
    >
      <Typography
        variant="h6"
        component="span"
        sx={{
          fontWeight: 700, // Жирный текст
          fontSize: "1rem", // Размер шрифта
          fontFamily: "Montserrat, sans-serif", // Шрифт
        }}
      >
        {discountPercentage}%
      </Typography>
    </Box>
  );
};

export default SaleDetailsBlockComponent;
