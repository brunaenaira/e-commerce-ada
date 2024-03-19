import React, { createContext, useContext, useState, ReactNode } from 'react';
interface Product {
    tititle: string;
    thumbnail: string;
    price: number;
}
interface Cart{
    products: Product[];
}
interface EcommerceContextType {
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
    cart: Cart;
    setCartItems: React.Dispatch<React.SetStateAction<Cart>>;
}

const EcommerceContext = createContext<EcommerceContextType | undefined>(undefined);

interface EcommerceProviderProps {
    children: ReactNode;
}

function EcommerceProvider({ children }: EcommerceProviderProps) {
    const [products, setProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState<Cart>(Cart(products=[]));
    return (
        <EcommerceProvider.Provider value={{ vingador, setVingador , cart, setCart }}>
            {children}
        </EcommerceProvider.Provider>
    );
}

function useEcommerce(): EcommerceContextType {
    const context = useContext(EcommerceContext);
    if (!context) {
        throw new Error('useEcommerce deve ser usado dentro de um EcommerceProvider');
    }
    return context;
}