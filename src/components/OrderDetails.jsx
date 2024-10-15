import React from "react";
import { Box, Typography, Button, Divider, TextField } from "@mui/material";

const OrderDetails = ({ cartLength, totalPrice }) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "550px",
        backgroundColor: "#f7f7f7",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",

        "@media (max-width: 1024px)": {
          maxWidth: "500px", // На экранах до 1024px уменьшаем ширину
        },
        "@media (max-width: 768px)": {
          maxWidth: "100%", // На экранах до 768px ширина будет 100%
        },
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        Order details
      </Typography>
      <Divider sx={{ marginY: 2 }} />
      <Typography variant="body1">{cartLength} items</Typography>
      <Typography variant="h4" fontWeight="bold" marginY={2}>
        Total: ${totalPrice.toFixed(2)}
      </Typography>
      <TextField
        label="Name"
        fullWidth
        sx={{
          width: "100%",
          height: "60px",
          marginBottom: 2,
          backgroundColor: "#f2f2f2",
          borderRadius: "5px",

          // Медиазапросы для полей ввода
          "@media (max-width: 1024px)": {
            height: "55px", // Уменьшаем высоту на меньших экранах
          },
          "@media (max-width: 768px)": {
            height: "50px", // Ещё меньше высота на маленьких экранах
          },
        }}
      />
      <TextField
        label="Phone number"
        fullWidth
        sx={{
          width: "100%",
          height: "60px",
          marginBottom: 2,
          backgroundColor: "#f2f2f2",
          borderRadius: "5px",
          "@media (max-width: 1024px)": {
            height: "55px",
          },
          "@media (max-width: 768px)": {
            height: "50px",
          },
        }}
      />
      <TextField
        label="Email"
        fullWidth
        sx={{
          width: "100%",
          height: "60px",
          marginBottom: 2,
          backgroundColor: "#f2f2f2",
          borderRadius: "5px",
          "@media (max-width: 1024px)": {
            height: "55px",
          },
          "@media (max-width: 768px)": {
            height: "50px",
          },
        }}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{
          height: "60px",
          backgroundColor: "#1565C0",
          borderRadius: "5px",
          "@media (max-width: 1024px)": {
            height: "55px",
          },
          "@media (max-width: 768px)": {
            height: "50px",
          },
        }}
      >
        Order
      </Button>
    </Box>
  );
};

export default OrderDetails;
