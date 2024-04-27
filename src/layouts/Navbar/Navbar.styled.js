import styled from "styled-components";

const StyledNavbar = styled.nav`
    background-color: #4793AF;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    
    // medium screen
    @media screen and (min-width: 768px){
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

const MenuList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    margin-top: 10px;

    // medium screen
    @media screen and (min-width: 768px) {
        flex-direction: row;
        align-items: flex-start;
        margin-top: 0;
    }
`;

const MenuItem = styled.li`
    list-style: none;
    &:hover {
        border-bottom: 2px solid #FFC470;
    }
    &.active {
        border-bottom: 2px solid #FFC470;
    }
`;

const StyleA = styled.a`
    text-decoration: none;
    color: #FFFFFF;
`;

const Logo = styled.h1`
    color: #FFC470;
    font-size: 35px;
    margin: 0;
    padding: 0;
`;

export {
    StyledNavbar, 
    MenuList,
    MenuItem,
    StyleA,
    Logo,

};