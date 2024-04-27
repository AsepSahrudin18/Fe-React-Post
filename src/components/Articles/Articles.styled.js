import styled from "styled-components";

const StyledArticleContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 35px;
    gap: 35px;

    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
`;

const StyledLeftArticle = styled.div`
    flex-basis: 35%;
`;

const StyledRightArticle = styled.div`
    flex-basis: 75%;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export {
    StyledArticleContainer,
    StyledLeftArticle,
    StyledRightArticle,

};