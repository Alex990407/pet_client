import React from "react";
import { Box, Typography } from "@mui/material";
import instagramIcon from "../../assets/icons/instagram.svg";
import whatsappIcon from "../../assets/icons/whatsapp.svg";
import mapImage from "../../assets/map.png"; // Импорт изображения карты

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "32px 0",
        borderTop: "2px solid #ccc", // Верхняя граница
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 16px",
          gap: "24px",
        }}
      >
        {/* Contact Section */}
        <Box sx={{ flex: 1, paddingLeft: "40px", paddingTop: "40px" }}>
          <Typography variant="h4" gutterBottom sx={{ textAlign: "left" }}>
            Contact
          </Typography>
        </Box>

        {/* Phone and Socials Section */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column", // Изменяется на столбец на малых экранах
            justifyContent: "space-between",
            gap: "16px", // Промежуток между элементами
            "@media (min-width: 600px)": {
              flexDirection: "row", // На больших экранах отображаем в строку
            },
          }}
        >
          {/* Phone Section */}
          <Box
            sx={{
              marginBottom: "16px",
              backgroundColor: "rgba(241, 243, 244, 1)", // Цвет фона
              padding: "16px",
              borderRadius: "8px",
              width: "780px", // Ширина контейнера
              maxWidth: "780px", // Максимальная ширина контейнера
              margin: "0",
              textAlign: "left", // Выровнять текст по левому краю
              "@media (max-width: 600px)": {
                padding: "12px", // Уменьшенный отступ для малых экранов
              },
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Montserrat, sans-serif", // Применение шрифта Montserrat
                color: "rgba(139, 139, 139, 1)", // Цвет текста
              }}
            >
              Phone
            </Typography>
            <Typography
              variant="h6"
              color="textPrimary"
              sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }} // Применение шрифта Montserrat
            >
              +49 30 915-88492
            </Typography>
          </Box>

          {/* Socials Section */}

          <Box
            sx={{
              marginBottom: "16px",
              backgroundColor: "rgba(241, 243, 244, 1)", // Цвет фона
              padding: "16px",
              borderRadius: "8px",
              width: "548px", // Ширина контейнера
              maxWidth: "548px", // Максимальная ширина контейнера
              margin: "0", // Убираем центрирование
              textAlign: "left", // Выровнять текст по левому краю
              "@media (max-width: 600px)": {
                padding: "12px", // Уменьшенный отступ для малых экранов
              },
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Montserrat, sans-serif", // Применение шрифта Montserrat
                color: "rgba(139, 139, 139, 1)", // Цвет текста
              }}
            >
              Socials
            </Typography>
            <Box sx={{ display: "flex", gap: "16px", marginTop: "8px" }}>
              <img
                src={instagramIcon}
                alt="Instagram"
                style={{ width: "24px", height: "24px", cursor: "pointer" }} // Размер иконки
              />
              <img
                src={whatsappIcon}
                alt="WhatsApp"
                style={{ width: "24px", height: "24px", cursor: "pointer" }} // Размер иконки
              />
            </Box>
          </Box>
        </Box>

        {/* Address and Working Hours Section */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column", // Изменяется на столбец на малых экранах
            justifyContent: "space-between",
            gap: "16px", // Промежуток между элементами
            "@media (min-width: 600px)": {
              flexDirection: "row", // На больших экранах отображаем в строку
            },
          }}
        >
          {/* Address Section */}
          <Box
            sx={{
              marginBottom: "16px",
              backgroundColor: "rgba(241, 243, 244, 1)", // Цвет фона
              padding: "16px",
              borderRadius: "8px",
              width: "780px", // Ширина контейнера
              maxWidth: "780px", // Максимальная ширина контейнера
              margin: "0",
              textAlign: "left",
              "@media (max-width: 600px)": {
                padding: "12px", // Уменьшенный отступ для малых экранов
              },
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Montserrat, sans-serif", // Применение шрифта Montserrat
                color: "rgba(139, 139, 139, 1)", // Цвет текста
              }}
            >
              Address
            </Typography>
            <Typography
              variant="h6"
              color="textPrimary"
              sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }} // Применение шрифта Montserrat
            >
              Wallstraße 9-13, 10179 Berlin, Deutschland
            </Typography>
          </Box>

          {/* Working Hours Section */}
          <Box
            sx={{
              marginBottom: "16px",
              backgroundColor: "rgba(241, 243, 244, 1)", // Цвет фона
              padding: "16px",
              borderRadius: "8px",
              width: "548px", // Ширина контейнера
              maxWidth: "548px", // Максимальная ширина контейнера
              margin: "0",
              textAlign: "left",
              "@media (max-width: 600px)": {
                padding: "12px", // Уменьшенный отступ для малых экранов
              },
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Montserrat, sans-serif", // Применение шрифта Montserrat
                color: "rgba(139, 139, 139, 1)", // Цвет текста
              }}
            >
              Working Hours
            </Typography>
            <Typography
              variant="h6"
              color="textPrimary"
              sx={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
              }}
            >
              24 hours a day
            </Typography>
          </Box>
        </Box>

        {/* Map Section */}
        <Box sx={{ flex: 1 }}>
          <img
            src={mapImage}
            alt="Google Maps Location"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
