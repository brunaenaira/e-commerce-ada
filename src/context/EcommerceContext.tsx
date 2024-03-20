import {createContext, ReactNode, useState} from 'react';
import {EcommerceContextType, Product} from "../@types/ecommerce";


export const EcommerceContext = createContext<EcommerceContextType | undefined>(undefined);

interface EcommerceProviderProps {
    children: ReactNode;
}

export function EcommerceProvider({children}: EcommerceProviderProps) {
    const [products, setProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState<Product[]>([]);
    const [showCart, setShowCart] = useState<boolean>(false);
    return (
        <EcommerceContext.Provider value={{products, setProducts, cart, setCart, showCart, setShowCart}}>
            {children}
        </EcommerceContext.Provider>
    );
}
