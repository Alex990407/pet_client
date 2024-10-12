import React, { useState, useEffect } from "react";
import BreadcrumbsComponent from "../../components/BreadcrumbsComponent";
import ProductComponent from "../../components/ProductComponent/index";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [cartItemCount, setCartItemCount] = useState(0);

  // Функция для обновления количества товаров в корзине
  const updateCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    setCartItemCount(totalItems);
    console.log("updateCart вызван");
  };

  // Обновляем количество товаров в корзине при монтировании компонента
  useEffect(() => {
    updateCart();
  }, []);

  return (
    <BreadcrumbsComponent>
      {/* Передаём productId и updateCart как пропсы в ProductComponent */}
      <ProductComponent productId={id} updateCart={updateCart} />
    </BreadcrumbsComponent>
  );
};

export default Product;
