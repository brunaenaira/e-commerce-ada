import React from "react";

export interface Product {
    id: number;
    title: string;
    thumbnail: string;
    price: number;
}

export interface EcommerceContextType {
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
    cart: Product[];
    setCart: React.Dispatch<React.SetStateAction<Product[]>>;
    showCart: boolean;
    setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}
