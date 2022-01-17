import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLemon } from '@fortawesome/free-solid-svg-icons';
import { NavigationHeader, NavigationItemCollection, NavigationLogo, NavgationItemLink } from "./navigation.styles";

const element = <FontAwesomeIcon icon={faLemon} size="3x" />

const Navigation = () => (
    <NavigationHeader>
        <NavigationItemCollection>
            <NavigationLogo to="/"> 
                { element } 
            </NavigationLogo>
            <NavgationItemLink to="/shop"> 
                SHOP 
            </NavgationItemLink>
            <NavgationItemLink to="/shop"> 
                SELL 
            </NavgationItemLink>
            <NavgationItemLink to="signin"> 
                SIGN IN 
            </NavgationItemLink>
            <NavgationItemLink to="signin"> 
                SIGN UP
            </NavgationItemLink>
        </NavigationItemCollection>
    </NavigationHeader>
);

export default Navigation;