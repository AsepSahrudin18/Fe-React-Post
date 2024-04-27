import styled from "styled-components";

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #4793AF;
    align-items: center;
    padding: 2rem;
`;

const StyledFooterP = styled.p`
    margin: 0;
    padding: 0;
    color: #FFC470;
    font-weight: 700;
`;

const SocialMedia = styled.p`
    color: #B3C8CF;
    font-size: 11px;
    padding: 0;
    margin-top: 10px;
`;

const StyledRedirectSosmed = styled.a`
    color: #B3C8CF;
    font-size: 11px;
    padding: 0;
    margin-top: 10px;
    text-decoration: none;
`;

export {
    StyledFooter,
    StyledFooterP,
    SocialMedia,
    StyledRedirectSosmed,
    
};