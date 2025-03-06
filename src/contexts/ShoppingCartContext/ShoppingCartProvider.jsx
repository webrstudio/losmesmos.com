"use client";
import { useState, useEffect } from "react";
import { createContext } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const addProduct = (newProduct) => {
    setProducts((prevProducts) => {
      localStorage.setItem(
        "cart",
        JSON.stringify([...prevProducts, newProduct])
      );
      return [...prevProducts, newProduct];
    });
  };
  const deleteProduct = (id) => {
    setProducts((prevProducts) => {
      const newProducts = [...prevProducts];
      newProducts.splice(id, 1);
      localStorage.setItem("cart", JSON.stringify(newProducts));
      return newProducts;
    });
  };
  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("cart")) ?? []);
  }, []);
  return (
    <ShoppingCartContext.Provider
      value={{ products, addProduct, deleteProduct }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
