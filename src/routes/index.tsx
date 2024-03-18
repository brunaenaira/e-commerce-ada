import {createBrowserRouter} from 'react-router-dom';

import HomePage from "../pages/home";
import ProductPage from "../pages/product";
import CartPage from "../pages/cart";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: '/product',
        element: <ProductPage/>
    },
    {
        path: '/cart',
        element: <CartPage/>
    }

]);

export default router;
