import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavgationItemLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
    color: black;
    text-decoration: none;
`;

export const NavigationItemCollection = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: #DEBA9D;
    border: 2px dashed #6F4C5B;
`;

export const NavigationHeader = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const NavigationLogo = styled(Link)`
    display: flex;
    align-items: center;
    margin-right: auto;
    padding-left: 15px;
    color: black;
    text-decoration: none;
`;