import ArticleTabNavigation from "../../components/ArticleTabNavigation/ArticleTabNavigation";
import Articles from "../../components/Articles/Articles";
import Hero from "../../components/Globals/Hero/Hero";
import StyledHomeArticleWrapper from "./Home.styled";

function Home() {
    return ( 
        <>
            <Hero />

            {/* Article Wrapper */}
            <StyledHomeArticleWrapper>
                <div>
                    <ArticleTabNavigation titleArticleCategory="Finance"/>
                    <Articles />
                </div>

                <div>
                    <ArticleTabNavigation titleArticleCategory="Education"/>
                    <Articles />
                </div>
            </StyledHomeArticleWrapper>
        </>
     );
}

export default Home;