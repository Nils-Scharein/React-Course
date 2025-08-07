import {createContext, type ReactNode, useContext, useState} from "react";
import type {Product} from "../types/types.ts";
import * as React from "react";

export type CartContextType = {
    cartItems: Product[],
    setCartItems: React.Dispatch<React.SetStateAction<Product[]>>,
    addCartItem: (productToAdd: Product) => void,
    removeCartItem: (productID: string) => void
};


const CartContext = createContext<CartContextType | null>(null)


export function CartProvider({children}: { children: ReactNode }) {
    const [cartItems, setCartItems] = useState<Product[]>([]);

    function addCartItem(productToAdd: Product) {
        setCartItems((prev) => [...prev, productToAdd]);
    }

    function removeCartItem(productID: string) {
        setCartItems((prev) => prev.filter((product) => product.id !== productID))
    }

    return (
        <CartContext.Provider value={{cartItems, setCartItems, addCartItem, removeCartItem}}>
            {children}
        </CartContext.Provider>
    )
}

function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}

export default useCart