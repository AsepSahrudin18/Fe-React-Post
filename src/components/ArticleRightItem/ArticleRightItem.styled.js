import styled from "styled-components";

const StyledRightArticleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: flex-start;
`;

const StyledRightImageArticle = styled.img`
    width: 100%;
    height: auto;
    max-width: 100px;
`;

const StyledSmallLabelP = styled.p`
    font-size: 15px;
    line-height: 1.333333;
    color: #222;
`;

const StyledCategoryArticleTitleSmall = styled.a`
    font-size: 12px;
    line-height: 1.7;
    color: #888;
    font-weight: 600;
`;

const StyledRightColumnDirection = styled.div`
    display: flex;
    flex-direction: column;
`;

export {
    StyledRightArticleWrapper,
    StyledRightImageArticle,
    StyledSmallLabelP,
    StyledCategoryArticleTitleSmall,
    StyledRightColumnDirection,

};