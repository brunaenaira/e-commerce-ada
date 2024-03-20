import {useContext, useEffect} from "react";
import MlApi from "../../service/MlApi.tsx";
import ProductCard from "../../components/ProductCard";
import './style.css'
import {EcommerceContext} from "../../context/EcommerceContext.tsx";
import {Product} from "../../@types/ecommerce";

export default function HomePage() {
    const {products, setProducts} = useContext(EcommerceContext);
    useEffect(() => {
        MlApi('cafe').get("/sites/MLB/search")
            .then(res => {
                const products = res.data.results.map((product: {
                    title: string;
                    thumbnail: string;
                    price: number;
                }) => ({
                    title: product.title, thumbnail: product.thumbnail, price: product.price
                }));
                setProducts(products);
            })
    }, [setProducts]);
    return (
        <section className="products container">
            {products.map((product: Product) => <ProductCard key={product.id} product={product}/>)}
        </section>
    );
}
