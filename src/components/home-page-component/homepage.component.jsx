import React from "react";

import CartDirectory from "../cart-directory/cartDirectory.component";
import { Brand } from "../brand/brand.component";

const HomePageComponent = () => (
    <div>
        <CartDirectory />
        <Brand />
    </div> 
    
);

export default HomePageComponent;