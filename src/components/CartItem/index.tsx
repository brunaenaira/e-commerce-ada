import {useContext} from 'react';
import {BsCartDashFill} from 'react-icons/bs';

import './style.css';
import formatCurrency from '../../utils/formatCurrency';
import {EcommerceContext} from "../../context/EcommerceContext.tsx";
import {Product} from "../../@types/ecommerce";

export default function CartItem({product}) {

    const {cart, setCart} = useContext(EcommerceContext);

    const removeCartItem = () => {
        const updatedItems = cart.filter((item: Product) => item.id != product.id);
        setCart(updatedItems);
    };

    return (
        <section className="cart-item">
            <img
                src={product.thumbnail}
                alt="imagem do produto"
                className="cart-item-image"
            />

            <div className="cart-item-content">
                <h3 className="cart-item-title">{product.title}</h3>
                <h3 className="cart-item-price">{formatCurrency(product.price, 'BRL')}</h3>

                <button
                    type="button"
                    className="button__remove-item"
                    onClick={removeCartItem}>
                    <BsCartDashFill/>
                </button>
            </div>
        </section>
    );
}
