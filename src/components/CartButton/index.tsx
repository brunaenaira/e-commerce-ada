import {AiOutlineShoppingCart} from 'react-icons/ai';

import './style.css';
import {EcommerceContext} from '../../context/EcommerceContext';
import {useContext} from 'react';

function CartButton() {
    const {cart, showCart, setShowCart} = useContext(EcommerceContext);
    return (<button
        type="button"
        onClick={() => setShowCart(!showCart)}
        className="cart__button">
        <AiOutlineShoppingCart/>
        <span className="cart-status">{cart.length}</span>
    </button>);
}

export default CartButton;
