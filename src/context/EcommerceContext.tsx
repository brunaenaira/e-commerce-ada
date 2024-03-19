import React from "react";
import {EcommerceContextProps} from "../@types/ecommerce";


export const EcommerceContext = React.createContext<EcommerceContextProps | undefined>(
    undefined
);
