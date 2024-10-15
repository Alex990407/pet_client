import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../screens/Home/index";
import Categories from "../screens/Categories/index";
import Products from "../screens/Products/index";
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";
import AllSales from "../screens/AllSales/index";
import Product from "../screens/Product/index";
import Cart from "../screens/CartPage";
import CategoryProducts from "../screens/CategoryProducts/index";
import NotFound from "../components/NotFoundComponent/NotFound";

export const AppNavigator = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/allProducts" element={<Products />} />
        <Route path="/allSales" element={<AllSales />} />
        <Route path="/category-products/:id" element={<CategoryProducts />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />{" "}
        {/* Добавляем маршрут для 404 */}
      </Routes>
      <Footer />
    </Router>
  );
};
