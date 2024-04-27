import { 
    StyledFooter,
    StyledFooterP,
    SocialMedia,
    StyledRedirectSosmed,

 } from "./Footer.styled";

function Footer() {
    return ( 
        <>
            <StyledFooter>
                <StyledFooterP>Developed by Asep Sahrudin</StyledFooterP>
                <SocialMedia><StyledRedirectSosmed href="https://www.instagram.com/18sahrudin/?next=%2F" target="_blank">Instagram: 18sahrudin</StyledRedirectSosmed> | <StyledRedirectSosmed href="https://www.linkedin.com/in/asep-sahrudin-0740761bb/" target="_blank">Linkedin: AsepSahrudin</StyledRedirectSosmed></SocialMedia>
            </StyledFooter>
        </>
     );
}

export default Footer;