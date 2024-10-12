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
import DeleteIcon from "@mui/icons-material/Delete";

const CartItem = ({ item, handleIncrease, handleDecrease, handleRemove }) => {
  return (
    <Card sx={{ display: "flex", marginBottom: "20px" }}>
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
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CardContent>
            <Typography variant="h6">{item.title}</Typography>
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
                sx={{ width: "60px", marginX: 1 }}
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
            <Typography variant="h6">
              ${item.discont_price || item.price}
            </Typography>
            <IconButton color="error" onClick={() => handleRemove(item.id)}>
              <DeleteIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CartItem;
