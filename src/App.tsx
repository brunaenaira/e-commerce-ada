import './App.css'
import {RouterProvider} from "react-router-dom";
import routes from "./routes";
import Header from "./components/Header/header.tsx";

function App() {

    return (<>
            <Header/>
            <RouterProvider router={routes}/>
        </>
    )
}

export default App
