import React, { createContext, useContext, useState, ReactNode } from 'react';
interface Product {
    tititle: string;
    thumbnail: string;
    price: number;
}
interface Cart {
    products: Product[];
}
interface EcommerceContextType {
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
    cart: Product[];
    setCartItems: React.Dispatch<React.SetStateAction<Product[]>>;
}

const EcommerceContext = createContext<EcommerceContextType | undefined>(undefined);

interface EcommerceProviderProps {
    children: ReactNode;
}

export function EcommerceProvider({ children }: EcommerceProviderProps) {
    const [products, setProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState<Product[]>([]);
    return (
        <EcommerceContext.Provider value={{ products, setProducts, cart, setCart }}>
            {children}
        </EcommerceContext.Provider>
    );
}

export function useEcommerce(): EcommerceContextType {
    const context = useContext(EcommerceContext);
    if (!context) {
        throw new Error('useEcommerce deve ser usado dentro de um EcommerceProvider');
    }
    return context;
}