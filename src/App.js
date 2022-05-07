import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
