interface HomeState {
    products: Product[];
    search: string;
}

export interface Cart {
    products: Product[]
}

export interface Product {
    id: number;
    title: string;
    thumbnail: string;
    price: number;
}

export type EcommerceContextProps = {
    products: Product[];
    setProducts: (products: [Product]) => void;
    cart: Cart;
    setCart: (products: [Product]) => void;
};

