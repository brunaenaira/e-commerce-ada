import './App.css'
import {RouterProvider} from "react-router-dom";
import routes from "./routes";
import Header from "./components/Header/header.tsx";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Provider from "./context/Provider";

function App() {

    return (<Provider>
            <Header/>
            <RouterProvider router={routes}/>
        </Provider>
    )
}

export default App
