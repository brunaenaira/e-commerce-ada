import {useContext} from "react";
import {EcommerceContext} from "../../context/EcommerceContext.tsx";
import formatCurrency from "../../utils/formatCurrency.tsx";
import CartItem from "../../components/CartItem";
import {Product} from "../../@types/ecommerce";
import './style.css'

export default function CartPage() {
    const {cart, showCart} = useContext(EcommerceContext);
    const tolalCartValue = cart.reduce((acc: number, product: Product) => product.price + acc, 0)
    return (
        <section className={`cart ${showCart ? 'cart--active' : ''}`}>
            <div className="cart-items">
                {cart.map((cartItem: Product) => <CartItem key={cartItem.id} product={cartItem}/>)}
            </div>

            <div className="cart-resume">{formatCurrency(tolalCartValue, 'BRL')}</div>
        </section>
    );
}
