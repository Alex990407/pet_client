import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Typography,
} from "@mui/material";

const ProductFilterComponent = ({ onFilter }) => {
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [showDiscounted, setShowDiscounted] = useState(false);
  const [sortOrder, setSortOrder] = useState("");

  // Вызываем функцию фильтрации при изменении любого параметра фильтра
  useEffect(() => {
    const filters = {
      priceFrom: priceFrom ? parseFloat(priceFrom) : null,
      priceTo: priceTo ? parseFloat(priceTo) : null,
      showDiscounted,
      sortOrder,
    };
    onFilter(filters); // Передаем фильтры родительскому компоненту
  }, [priceFrom, priceTo, showDiscounted, sortOrder, onFilter]);

  return (
    <Box
      sx={{
        maxWidth: "910px",
        display: "flex",
        alignItems: "center",
        gap: 1,
        flexWrap: "wrap", // Для мобильных устройств элементы могут переходить на следующую строку
        padding: "10px",
        marginBottom: "40px",
        // Для мобильных устройств меняем направление на столбец
        "@media (max-width: 600px)": {
          flexDirection: "column", // Переводим элементы в вертикальный ряд на малых экранах
          alignItems: "flex-start",
          gap: 1, // Уменьшаем отступы
        },
      }}
    >
      <Typography
        variant="body1"
        sx={{
          marginRight: "8px",
          fontFamily: "Montserrat",
          fontSize: "24px",
          fontWeight: 600,
        }}
      >
        Price
      </Typography>

      <TextField
        label="from"
        type="number"
        value={priceFrom}
        onChange={(e) => setPriceFrom(e.target.value)}
        variant="outlined"
        size="small"
        sx={{ width: "100px", height: "30px" }}
      />

      <TextField
        label="to"
        type="number"
        value={priceTo}
        onChange={(e) => setPriceTo(e.target.value)}
        variant="outlined"
        size="small"
        sx={{ width: "100px", marginLeft: "8px", height: "30px" }}
      />

      <Typography
        variant="body1"
        sx={{
          marginLeft: "16px",
          fontFamily: "Montserrat",
          fontSize: "24px",
          fontWeight: 600,
        }}
      >
        Discounted items
      </Typography>

      <Checkbox
        checked={showDiscounted}
        onChange={(e) => setShowDiscounted(e.target.checked)}
        sx={{ marginLeft: "8px" }}
      />

      <Typography
        variant="body1"
        sx={{
          marginLeft: "16px",
          fontFamily: "Montserrat",
          fontSize: "24px",
          fontWeight: 600,
        }}
      >
        Sorted
      </Typography>

      <FormControl
        variant="outlined"
        size="small"
        sx={{
          minWidth: "150px",
          // На малых экранах растягиваем select на всю ширину
          "@media (max-width: 600px)": {
            minWidth: "100%",
          },
        }}
      >
        <InputLabel id="sort-label">Sort</InputLabel>
        <Select
          labelId="sort-label"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          label="Sort By"
        >
          <MenuItem value="">None</MenuItem>
          <MenuItem value="priceAsc">Price: Low to High</MenuItem>
          <MenuItem value="priceDesc">Price: High to Low</MenuItem>
          <MenuItem value="discountAsc">Discount: Low to High</MenuItem>
          <MenuItem value="discountDesc">Discount: High to Low</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default ProductFilterComponent;
