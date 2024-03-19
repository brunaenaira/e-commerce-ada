import { useContext } from 'react';
import { BsFillCartPlusFill } from 'react-icons/bs';

import './style.css';
import formatCurrency from "../../utils/formatCurrency.tsx";
import { EcommerceContext } from '../../context/EcommerceContext.tsx';

export default function ProductCard({ product }) {
    // const { product } = this.props;
    const { cart, setCart } = useContext(EcommerceContext);
    const addProductoCart = () => setCart([...cart, product]);

    // const { title, thumbnail, price } = product;

    return (
        <section className="product-card">

            <img
                src={product.thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
                alt="product"
                className="card__image"
            />

            <div className="card__infos">
                <h2 className="card__price">{formatCurrency(product.price, 'BRL')}</h2>
                <h2 className="card__title">{product.title}</h2>
            </div>

            <button
                type="button"
                onClick={addProductoCart}
                className="button__add-cart">
                <BsFillCartPlusFill />
            </button>
        </section>
    );
}
