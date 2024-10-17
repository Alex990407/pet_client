import React from "react";
import {
  Box,
  Typography,
  Card,
  Grid,
  IconButton,
  TextField,
  CardMedia,
  CardContent,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";

const CartItem = ({ item, handleIncrease, handleDecrease, handleRemove }) => {
  return (
    <Card
      sx={{
        display: "flex",
        maxWidth: "780px",
        maxHeight: "180px",
        marginBottom: "20px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Тень как на макете
        borderRadius: "10px", // Скругленные углы
        position: "relative", // Для абсолютного позиционирования иконки
      }}
    >
      <Grid container>
        <Grid item xs={12} sm={3}>
          <CardMedia
            component="img"
            image={`http://localhost:3333/${item.image}`}
            alt={item.title}
            sx={{
              width: 120,
              height: 120,
              objectFit: "contain",
              margin: "auto",
              borderRadius: "10px",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CardContent>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", fontSize: "18px" }}
            >
              {item.title}
            </Typography>
            <Box display="flex" alignItems="center" marginTop={2}>
              <IconButton onClick={() => handleDecrease(item.id)}>
                <RemoveIcon />
              </IconButton>
              <TextField
                value={item.quantity}
                inputProps={{
                  readOnly: true,
                  style: { textAlign: "center" },
                }}
                sx={{
                  width: "60px",
                  marginX: 1,
                  backgroundColor: "#f2f2f2",
                  borderRadius: "5px",
                }}
              />
              <IconButton onClick={() => handleIncrease(item.id)}>
                <AddIcon />
              </IconButton>
            </Box>
          </CardContent>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            height="100%"
            paddingRight={2}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              ${item.discont_price || item.price}
            </Typography>

            {/* Иконка закрытия (крестик) в правом верхнем углу */}

            <IconButton
              onClick={() => handleRemove(item.id)}
              sx={{
                position: "absolute",
                top: "10px",
                right: "10px",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CloseIcon sx={{ fontSize: "20px" }} />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CartItem;
