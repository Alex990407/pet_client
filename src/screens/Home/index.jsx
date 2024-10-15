import React from "react";
import { Box, Typography, Button } from "@mui/material";
import homeImage from "../../assets/home_bg.png"; // Импортируем изображение
import CategoriesComponent from "../../components/CategoriesComponent/index";
import TitleLineButton from "../../components/TitleLineButton";
import BannerComponent from "../../components/HomeBannerComponent/BannerComponent";
import DiscountedProducts from "../../components/DiscountedProductsComponent/index";

const Home = () => {
  return (
    <>
      <Box
        component="div"
        sx={{
          width: "100%", // Используем полную ширину
          maxWidth: "1440px",
          maxHeight: "600px", // Фиксированная высота
          backgroundImage: `url(${homeImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "80px 40px 210px 40px", // Отступы контейнера
          display: "flex",
          justifyContent: "flex-start", // Прижимаем содержимое к верху
          alignItems: "flex-start", // Прижимаем содержимое к левому краю
          margin: "0 auto",
        }}
      >
        {/* Контейнер для текста и кнопки */}
        <Box
          sx={{
            display: "flex",
            width: { xs: "100%", md: "1360px" }, // Адаптивная ширина
            height: "310px",
            flexDirection: "column", // Элементы располагаются вертикально
            justifyContent: "start",
            alignItems: "flex-start", // Прижимаем элементы к левому краю
            gap: "20px",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              fontSize: "56px", // Уменьшен размер для лучшего размещения
              lineHeight: "65px",
              color: "white",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
              mb: 3, // Отступ между текстом и кнопкой
            }}
          >
            Amazing Discounts on Pets Products!
          </Typography>

          <Button
            sx={{
              width: "218px", // Ширина кнопки
              height: "58px", // Высота кнопки
              backgroundColor: "rgba(13, 80, 255, 1)", // Цвет кнопки
              color: "#FFFFFF", // Белый цвет текста
              fontSize: "18px", // Размер текста
              padding: "10px 20px", // Внутренние отступы
              fontWeight: 600, // Толщина текста
              textTransform: "none", // Отключение uppercase
              boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.3)", // Тень для кнопки
              "&:hover": {
                backgroundColor: "rgba(10, 70, 230, 1)",
              },
            }}
          >
            Check out
          </Button>
        </Box>
      </Box>

      {/* Новый блок с категориями */}
      <Box
        sx={{
          padding: "0 40px", // Добавляем отступы 20px по бокам и 40px сверху и снизу
          maxWidth: "1360px", // Максимальная ширина для большого экрана
          maxHeight: "500px",
          margin: "0 auto", // Центрируем блок
        }}
      >
        <TitleLineButton
          title="Categories"
          linkLabel="All categories"
          linkUrl="/categories"
        >
          <CategoriesComponent limit={4} hideTitle={true} />{" "}
          {/* Ограничиваем категории до 4 */}
        </TitleLineButton>
      </Box>
      {/* Компонент баннера */}
      <BannerComponent />

      {/* Добавляем отображение 4 продуктов со скидкой */}
      <Box sx={{ padding: "20px" }}>
        <TitleLineButton title="Sale" linkLabel="All sales" linkUrl="/allSales">
          <DiscountedProducts limit={4} showFilter={false} hideTitle={true} />{" "}
          {/* Ограничиваем до 4 продуктов */}
        </TitleLineButton>
      </Box>
    </>
  );
};

export default Home;
