'use client'
import { useState } from "react"
import { createContext } from "react"

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children})=>{
    const [products, setProducts]= useState([])
    const addProduct = (newProduct)=>{
        setProducts((prevProducts) => [...prevProducts, newProduct])
    }
    return (
        <ShoppingCartContext.Provider value={{products, addProduct}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}