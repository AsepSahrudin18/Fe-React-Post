import { 
    StyledArticleTabNavigation, 
    StyledTitleTab,
    StyledTabList,
    StyleTabItem,


 } from "./ArticleTabNavigation.styled";

function ArticleTabNavigation({titleArticleCategory}) {
    return ( 
        <StyledArticleTabNavigation>
            <StyledTitleTab>{titleArticleCategory}:</StyledTitleTab>
            <StyledTabList>
                <StyleTabItem>Finance</StyleTabItem>
                <StyleTabItem>Business</StyleTabItem>
                <StyleTabItem>Education</StyleTabItem>
            </StyledTabList>
        </StyledArticleTabNavigation>
     );
}

export default ArticleTabNavigation;