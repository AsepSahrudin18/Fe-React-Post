import styled from "styled-components";

const StyledArticle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const StyledArticleImage = styled.img`
    width: 100%;
    height: auto;
`;

const StyledMediumLabelP = styled.p`
    font-size: 20px;
    line-height: 1.25;
`;

const StyledRowDirection = styled.div`
    // untuk menentukan display small & medium screen up
    display: flex;

    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 6px;
`;

const StyledCategoryArticleTitleMedium = styled.a`
    font-size: 12px;
    line-height: 1.7;
    color: #888;
    font-weight: 600;
`;

const StyledArticleDatePost = styled.span`
    font-size: 12px;
    line-height: 1.7;
    color: #888;
`;

export {
    StyledArticle,
    StyledArticleImage,
    StyledMediumLabelP,
    StyledCategoryArticleTitleMedium,
    StyledArticleDatePost,
    StyledRowDirection,


};