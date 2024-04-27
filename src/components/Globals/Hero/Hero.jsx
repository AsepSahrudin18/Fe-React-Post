import React from "react";
import {
    StyledHeroContainer, 
    StyledHeroLeft,
    StyledHeroRight,
    StyledHeroImage,
    StyledHeroTitle,
    P,

} from "./Hero.styled";

function Hero() {
    return (
        <StyledHeroContainer>
           <StyledHeroLeft>
           <StyledHeroTitle>React Post</StyledHeroTitle>
                <P>Selamat datang di React Post! Di sini, kami mengundang Anda untuk menjelajahi artikel-artikel terbaru kami yang tidak hanya memberikan wawasan mendalam, tetapi juga membuka ruang untuk refleksi yang lebih dalam tentang topik-topik menarik dalam dunia ini.</P>
           </StyledHeroLeft>

            <StyledHeroRight>
                <StyledHeroImage src={`../images/hero.svg`} alt="Hero Img" />
            </StyledHeroRight>
        </StyledHeroContainer>
    );
}

export default Hero;