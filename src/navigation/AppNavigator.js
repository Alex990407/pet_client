import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../screens/Home/index";
import Categories from "../screens/Categories/index";
import Products from "../screens/Products/index";
import Header from "../components/Header/index";

export const AppNavigator = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/сategories" element={<Categories />} />
      </Routes>
      <Routes>
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
};
