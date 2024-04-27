import styled from "styled-components";

const StyledHeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 4rem;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

const StyledHeroLeft = styled.div`
    flex-basis: 50%;
    border-left: 7px solid #FFC470;
    padding-left: 11px;
`;

const StyledHeroRight = styled.div`
    flex-basis: 50%;
    // background-color: yellow;

    @media screen and (min-width: 768px){
        justify-content: right;
        display: flex;
        padding-left: 15px;
    }
`;

const StyledHeroImage = styled.img`
    width: 100%;
    height: auto;
    max-width: 400px;
`;

const StyledHeroTitle = styled.h1`
    font-size: 40px;
    color: #4793AF;
    margin: 0;
    padding: 0;
`;

const P = styled.p`
    max-width: 500px;
    text-align: justify;

    // media screen
    @media screen and (min-width: 768px) {
        padding-right: 15px;
    }
`;

export {
    StyledHeroContainer, 
    StyledHeroLeft,  
    StyledHeroRight,
    StyledHeroImage,
    StyledHeroTitle,
    P,


};