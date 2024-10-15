import React, { useState, useEffect } from "react";
import BreadcrumbsComponent from "../../components/BreadcrumbsComponent";
import ProductComponent from "../../components/ProductComponent/index";
import { useParams } from "react-router-dom";
import axios from "axios";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Функция для обновления количества товаров в корзине
  const updateCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    setCartItemCount(totalItems);
    console.log("updateCart вызван");
  };

  // Запрашиваем данные о продукте
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3333/products/${id}`
        );
        setProduct(response.data[0]);
        setLoading(false);
      } catch (err) {
        setError("Failed to load product");
        setLoading(false);
      }
    };

    fetchProduct();
    updateCart();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <BreadcrumbsComponent categoryTitle={product?.title}>
      {/* Передаем продукт и функции корзины в ProductComponent */}
      <ProductComponent product={product} updateCart={updateCart} />
    </BreadcrumbsComponent>
  );
};

export default Product;
