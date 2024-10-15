import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import dogsImage from "../../assets/dogs.png"; // Импортируем картинку

const BannerComponent = () => {
  return (
    <Box
      sx={{
        maxWidth: "1395px",
        maxHeight: "485px",
        backgroundColor: "#0D50FF", // Цвет фона
        margin: "0 auto", // Центрируем баннер
        display: "flex", // Используем flexbox
        flexDirection: "column",
        alignItems: "center",
        marginLeft: "40px",
        marginTop: "40px", // Отступ сверху
        padding: "20px", // Внутренние отступы
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
            "@media (max-width: 600px)": {
              fontSize: "1.8rem", // Меньший размер текста на маленьких экранах
            },
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
          alignItems: "center",
          width: "100%",
          height: "100%", // Занимаем полную высоту родительского контейнера
          maxHeight: "360px",
          "@media (max-width: 900px)": {
            flexDirection: "column", // Вертикальное расположение на малых экранах
            alignItems: "center",
          },
        }}
      >
        {/* Левый блок с изображением */}
        <Box
          component="img"
          src={dogsImage}
          alt="Dogs"
          sx={{
            width: "50%", // 50% ширины родительского контейнера
            height: "auto",
            objectFit: "contain", // Изображение сохраняет пропорции
            zIndex: 1, // Изображение под контентом
            "@media (max-width: 900px)": {
              width: "100%", // Увеличиваем ширину на весь экран на мобильных
              marginBottom: "20px", // Отступ снизу на малых экранах
            },
          }}
        />

        {/* Правый блок с формой */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column", // Вертикальное расположение элементов формы
            gap: "10px", // Промежуток между полями ввода
            width: "50%", // 50% ширины родительского контейнера
            zIndex: 2, // Чтобы форма была над изображением
            "@media (max-width: 900px)": {
              width: "100%", // Форма растягивается на весь экран на маленьких экранах
            },
          }}
        >
          <TextField
            label="Name"
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
            }}
          />
          <TextField
            label="Phone number"
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
            }}
          />
          <TextField
            label="Email"
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
            }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "white", // Белый фон кнопки
              color: "#0D50FF", // Цвет текста кнопки
              fontWeight: "600",
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
