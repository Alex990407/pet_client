// import React, { useState, useEffect } from "react";
// import { Box, Grid, Typography } from "@mui/material";
// import CartItem from "../../components/CartItem";
// import OrderDetails from "../../components/OrderDetails";

// const CartPage = () => {
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCart(storedCart);
//   }, []);

//   const handleRemoveFromCart = (productId) => {
//     const updatedCart = cart.filter((item) => item.id !== productId);
//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   const handleIncrease = (productId) => {
//     const updatedCart = cart.map((item) =>
//       item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
//     );
//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   const handleDecrease = (productId) => {
//     const updatedCart = cart.map((item) =>
//       item.id === productId && item.quantity > 1
//         ? { ...item, quantity: item.quantity - 1 }
//         : item
//     );
//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   const totalPrice = () =>
//     cart.reduce((total, item) => {
//       const itemPrice = item.discont_price ? item.discont_price : item.price;
//       return total + itemPrice * item.quantity;
//     }, 0);

//   return (
//     <Box
//       sx={{
//         padding: "20px",
//         maxWidth: "1200px", // Ограничиваем ширину страницы
//         mx: "auto", // Центрирование страницы
//       }}
//     >
//       <Typography
//         variant="h4"
//         sx={{ fontWeight: "bold", fontSize: "32px" }}
//         gutterBottom
//       >
//         Shopping cart
//       </Typography>
//       {cart.length === 0 ? (
//         <Typography>Your cart is empty</Typography>
//       ) : (
//         <Grid container spacing={3}>
//           {/* Левая часть - товары с отступом слева */}
//           <Grid item xs={12} md={8} sx={{ pl: "40px" }}>
//             {cart.map((item) => (
//               <CartItem
//                 key={item.id}
//                 item={item}
//                 handleIncrease={handleIncrease}
//                 handleDecrease={handleDecrease}
//                 handleRemove={handleRemoveFromCart}
//               />
//             ))}
//           </Grid>

//           {/* Правая часть - детали заказа с отступом справа */}
//           <Grid item xs={12} md={4} sx={{ pr: "40px" }}>
//             <OrderDetails cartLength={cart.length} totalPrice={totalPrice()} />
//           </Grid>
//         </Grid>
//       )}
//     </Box>
//   );
// };

// export default CartPage;

import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CartItem from "../../components/CartItem";
import OrderDetails from "../../components/OrderDetails";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const handleRemoveFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleIncrease = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleDecrease = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = () =>
    cart.reduce((total, item) => {
      const itemPrice = item.discont_price ? item.discont_price : item.price;
      return total + itemPrice * item.quantity;
    }, 0);

  return (
    <Box
      sx={{
        padding: "20px",
        maxWidth: "1200px", // Ограничиваем ширину страницы
        mx: "auto", // Центрирование страницы
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", fontSize: "32px" }}
        gutterBottom
      >
        Shopping cart
      </Typography>

      {cart.length === 0 ? (
        <Box
          sx={{
            textAlign: "center",
            padding: "40px",
          }}
        >
          <Typography
            variant="h6"
            sx={{ marginBottom: "20px", fontWeight: "500" }}
          >
            Looks like you have no items in your basket currently.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/allProducts")} // Переход на страницу всех продуктов
          >
            Continue Shopping
          </Button>
        </Box>
      ) : (
        <Grid container spacing={3}>
          {/* Левая часть - товары с отступом слева */}
          <Grid item xs={12} md={8} sx={{ pl: "40px" }}>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                handleIncrease={handleIncrease}
                handleDecrease={handleDecrease}
                handleRemove={handleRemoveFromCart}
              />
            ))}
          </Grid>

          {/* Правая часть - детали заказа с отступом справа */}
          <Grid item xs={12} md={4} sx={{ pr: "40px" }}>
            <OrderDetails cartLength={cart.length} totalPrice={totalPrice()} />
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default CartPage;
