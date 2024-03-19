import {AiOutlineShoppingCart} from 'react-icons/ai';

import './style.css';

function CartButton() {

    return (<button
        type="button"
        className="cart__button">
        <AiOutlineShoppingCart/>
        <span className="cart-status">{10}</span>
    </button>);
}

export default CartButton;
