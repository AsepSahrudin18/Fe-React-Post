import Article from "../Article/Article";
import ArticelRightItem from "../ArticleRightItem/ArticleRightItem";
import { StyledArticleContainer, StyledLeftArticle, StyledRightArticle } from "./Articles.styled";

function Articles() {
    return (
        <>
            <StyledArticleContainer>
                {/* Left Article Item */}
                <StyledLeftArticle>
                    <Article />
                </StyledLeftArticle>

                {/* Right Article Item */}
                <StyledRightArticle>
                    <ArticelRightItem />
                    <ArticelRightItem />
                    <ArticelRightItem />
                </StyledRightArticle>
            </StyledArticleContainer>
        </>
     );
}

export default Articles;