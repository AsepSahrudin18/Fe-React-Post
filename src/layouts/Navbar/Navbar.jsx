import React from "react";
import { 
    StyledNavbar, 
    MenuList, 
    MenuItem, 
    StyleA, 
    Logo 
} from "./Navbar.styled";

function Navbar(){
    return (
        <>
            <StyledNavbar>
                <Logo>React Post</Logo>
                <MenuList>
                    <MenuItem><StyleA href={`/`}>Home</StyleA></MenuItem>
                    <MenuItem><StyleA href={`/articles`}>All Post</StyleA></MenuItem>
                    <MenuItem><StyleA href={`/new`}>Add New</StyleA></MenuItem>
                    {/* <MenuItem><StyleA href={`about`}>About</StyleA></MenuItem> */}
                </MenuList>
            </StyledNavbar>
        </>
    )
}

export default Navbar;