import styled from "styled-components";

const StyledArticleTabNavigation = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    border: 1px solid #e6e6e6;
    border-left: 6px solid #FFC470;
    padding: 0 1rem;

    @media screen and (min-width: 768px){
        padding: 0;
    }
`;

const StyledTitleTab = styled.h1`
    font-size: 20px;
    color: #FFC470;
    padding-right: 1rem;

    @media screen and (min-width: 768px) {
        font-size: 20px;
        padding: 10px 45px 10px 8px;
    }
`;

const StyledTabList = styled.ul`
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    gap: 1rem;
`;

const StyleTabItem = styled.li`
    list-style: none;
`;

export {
    StyledArticleTabNavigation,
    StyledTitleTab,
    StyledTabList,
    StyleTabItem,

};