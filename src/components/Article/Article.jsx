import { 
    StyledArticle, 
    StyledArticleDatePost, 
    StyledArticleImage, 
    StyledCategoryArticleTitleMedium, 
    StyledMediumLabelP, 
    StyledRowDirection,
     
} from "./Article.styled";

function Article() {
    return ( 
        <StyledArticle>
            <StyledArticleImage src={`./images/articles/article.jpg`} alt="Article Img"/>
            <StyledMediumLabelP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni inventore doloremque quidem, expedita blanditiis odit.</StyledMediumLabelP>

            {/* Date Post */}
            <StyledRowDirection>
                <StyledCategoryArticleTitleMedium>Finance -</StyledCategoryArticleTitleMedium><StyledArticleDatePost>27 April 2024</StyledArticleDatePost>
            </StyledRowDirection>
        </StyledArticle>
     );
}

export default Article;