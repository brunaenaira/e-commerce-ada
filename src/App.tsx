import './App.css'
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import Header from "./components/Header/header.tsx";
import { EcommerceProvider } from "./context/EcommerceContext";

function App() {

    return (<EcommerceProvider>
        <Header />
        <RouterProvider router={routes} />
    </EcommerceProvider>
    )
}

export default App
