import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import dogsImage from "../../assets/dogs.png"; // Импортируем картинку

const BannerComponent = () => {
  return (
    <Box
      sx={{
        maxWidth: "1395px",
        backgroundColor: "#0D50FF", // Цвет фона
        margin: "0 auto", // Центрируем баннер
        display: "flex", // Используем flexbox
        flexDirection: "column",
        alignItems: "center",
        marginTop: "40px", // Отступ сверху
        marginLeft: "40px",
        padding: { xs: "20px", sm: "30px", md: "40px" }, // Адаптивные отступы
        borderRadius: "8px", // Скругляем углы
        position: "relative", // Относительное позиционирование для изображения
        overflow: "hidden", // Убеждаемся, что контент не выйдет за пределы баннера
      }}
    >
      {/* Контейнер для текста в верхней части */}
      <Box
        sx={{
          width: "100%", // Контейнер занимает всю ширину по оси X
          textAlign: "center", // Центрируем содержимое по горизонтали
          paddingTop: "10px", // Отступ сверху для текста
          marginBottom: "30px",
          zIndex: 2, // Чтобы контейнер был поверх изображения
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            color: "white", // Белый текст
            fontSize: { xs: "1.5rem", md: "2rem" }, // Адаптивный размер шрифта
            lineHeight: { xs: "1.5", md: "1.8" }, // Адаптивная высота строки
          }}
        >
          5% off on the first order
        </Typography>
      </Box>

      {/* Основной контейнер с изображением и формой */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start", // Выровнять по верхнему краю
          width: "100%",
          height: "100%", // Занимаем полную высоту родительского контейнера
          maxHeight: "360px",
          flexDirection: { xs: "column", md: "row" }, // Вертикальное расположение на малых экранах
          gap: { xs: "20px", md: "0" }, // Промежуток между элементами
        }}
      >
        {/* Левый блок с изображением */}
        <Box
          component="img"
          src={dogsImage}
          alt="Dogs"
          sx={{
            width: { xs: "100%", md: "50%" }, // Адаптивная ширина
            height: "auto",
            objectFit: "contain", // Изображение сохраняет пропорции
            zIndex: 1, // Изображение под контентом
            marginBottom: { xs: "20px", md: "0" }, // Отступ снизу на малых экранах
          }}
        />

        {/* Правый блок с формой */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column", // Вертикальное расположение элементов формы
            gap: "10px", // Промежуток между полями ввода
            width: { xs: "100%", md: "50%" }, // Адаптивная ширина
            zIndex: 2, // Чтобы форма была над изображением
          }}
        >
          {["Name", "Phone number", "Email"].map((label, index) => (
            <TextField
              key={index}
              label={label}
              variant="outlined"
              fullWidth
              InputProps={{
                style: {
                  backgroundColor: "transparent", // Прозрачный фон
                  border: "1px solid white", // Белая граница
                  color: "white", // Белый текст
                },
              }}
              InputLabelProps={{
                style: { color: "white" }, // Белый цвет для label
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white", // Белая граница
                  },
                  "&:hover fieldset": {
                    borderColor: "#f0f0f0", // Светлее при наведении
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white", // Белая граница при фокусе
                  },
                },
                // Медиа запрос для адаптивности
                "@media (max-width: 600px)": {
                  marginTop: "10px", // Добавляем отступ сверху на малых экранах
                },
              }}
            />
          ))}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "white", // Белый фон кнопки
              color: "black", // Цвет текста кнопки
              fontFamily: "Montserrat, sans-serif", // Устанавливаем шрифт
              fontWeight: 600, // Полужирный шрифт
              height: "50px",
              "&:hover": {
                backgroundColor: "#f0f0f0", // Светлый фон при наведении
              },
            }}
          >
            Get a discount
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default BannerComponent;
