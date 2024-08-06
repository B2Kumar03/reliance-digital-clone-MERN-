import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Register from "../components/Register";
import Login from "../components/Login";
import ProductDetails from "../components/ProductDetails";
import Cart from "../components/Cart";
import Search from "../components/Search";

const  AllRoute= () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product-details/:id" element={<ProductDetails/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/search/:id" element={<Search/>}/>
    </Routes>
  );
};

export default AllRoute;
