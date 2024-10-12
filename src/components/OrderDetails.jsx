import React from "react";
import { Box, Typography, Button, Divider, TextField } from "@mui/material";

const OrderDetails = ({ cartLength, totalPrice }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#f7f7f7",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <Typography variant="h5">Order details</Typography>
      <Divider sx={{ marginY: 2 }} />
      <Typography variant="body1">{cartLength} items</Typography>
      <Typography variant="h4" fontWeight="bold" marginY={2}>
        Total: ${totalPrice.toFixed(2)}
      </Typography>
      <TextField label="Name" fullWidth sx={{ marginBottom: 2 }} />
      <TextField label="Phone number" fullWidth sx={{ marginBottom: 2 }} />
      <TextField label="Email" fullWidth sx={{ marginBottom: 2 }} />
      <Button variant="contained" color="primary" fullWidth>
        Order
      </Button>
      <Button
        variant="text"
        fullWidth
        sx={{ marginTop: 2 }}
        onClick={() => window.history.back()}
      >
        Back to the store
      </Button>
    </Box>
  );
};

export default OrderDetails;
