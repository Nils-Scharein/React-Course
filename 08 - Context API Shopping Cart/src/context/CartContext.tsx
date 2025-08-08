import {createContext, type ReactNode, useContext} from "react";
import type {Product} from "../types/types.ts";
import useLocal from "../hooks/useLocal.tsx";

type CartItem = Product & { quantity: number };

export type CartContextType = {
    cartItems: CartItem[];
    setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
    addToCart: (productToAdd: Product) => void;
    removeFromCart: (productID: string) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({children}: { children: ReactNode }) {
    const [cartItems, setCartItems] = useLocal<CartItem[]>("Cart Items", []);

    const addToCart = (product: Product) => {
        setCartItems((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                return prev.map((item) =>
                    item.id === product.id
                        ? {...item, quantity: item.quantity + 1}
                        : item
                );
            }
            return [...prev, {...product, quantity: 1}];
        });
    };

    const removeFromCart = (productID: string) => {
        setCartItems((prev) => {
            const existing = prev.find((item) => item.id === productID);
            if (!existing) return prev;
            if (existing.quantity > 1) {
                return prev.map((item) =>
                    item.id === productID
                        ? {...item, quantity: item.quantity - 1}
                        : item
                );
            }
            return prev.filter((item) => item.id !== productID);
        });
    };

    return (
        <CartContext.Provider
            value={{cartItems, setCartItems, addToCart, removeFromCart}}
        >
            {children}
        </CartContext.Provider>
    );
}

function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}

export default useCart;
