import {createContext, type ReactNode, useContext} from "react";
import useFetch from "../hooks/useFetch.tsx";
import type {Product} from "../types/types.ts";

export type ProductContextType = {
    productsData: Product[] | null;
    isLoading: boolean;
    error: string | null;
};


export const ProductContext = createContext<ProductContextType | null>(null);

export function ProductProvider({children}: { children: ReactNode }) {
    const {data: productsData, isLoading, error} = useFetch<Product[]>("/api/products");

    return (
        <ProductContext.Provider value={{productsData, isLoading, error}}>
            {children}
        </ProductContext.Provider>
    )
}

function useProducts() {
    const context = useContext(ProductContext)

    if (!context) {
        throw new Error("ProductContext must be used within a ProductProvider");
    }

    return context
}

export default useProducts
