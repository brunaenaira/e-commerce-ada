import './App.css'
import {RouterProvider} from "react-router-dom";
import routes from "./routes";
import Header from "./components/Header/header.tsx";
import {EcommerceProvider} from "./context/EcommerceContext";
import CartPage from "./pages/cart";

function App() {

    return (<EcommerceProvider>
            <Header/>
            <RouterProvider router={routes}/>
            <CartPage/>
        </EcommerceProvider>
    )
}

export default App
