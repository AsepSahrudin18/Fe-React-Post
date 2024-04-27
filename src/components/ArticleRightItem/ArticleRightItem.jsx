import { StyledArticleDatePost, StyledRowDirection } from "../Article/Article.styled";
import { StyledCategoryArticleTitleSmall, StyledRightArticleWrapper, StyledRightColumnDirection, StyledRightImageArticle, StyledSmallLabelP } from "./ArticleRightItem.styled";

function ArticelRightItem() {
    return ( 
        <StyledRightArticleWrapper>
            <StyledRightImageArticle src="./images/articles/article_education.jpg"/>
            
            <StyledRightColumnDirection>
                <StyledSmallLabelP>Lorem ipsum dolor sit, amet consectetur adipisicing.</StyledSmallLabelP>

                <StyledRowDirection>
                    <StyledCategoryArticleTitleSmall>Education -</StyledCategoryArticleTitleSmall><StyledArticleDatePost>April 12</StyledArticleDatePost>
                </StyledRowDirection>
            </StyledRightColumnDirection>
        </StyledRightArticleWrapper>
     );
}

export default ArticelRightItem;