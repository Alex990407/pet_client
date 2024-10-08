import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../screens/Home/index";
import Categories from "../screens/Categories/index";
import Products from "../screens/Products/index";
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";
import AllSales from "../screens/AllSales/index";
import CategoryProducts from "../screens/CategoryProducts/index";

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
      </Routes>
      <Footer />
    </Router>
  );
};
