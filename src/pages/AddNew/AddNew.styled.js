import styled from "styled-components";

const StyledSectionBottomContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
`;

const StyledLeftBottomSection = styled.div`
    flex-basis: 50%;
    padding: 1rem;
`;

const StyledRightBottomSection = styled.div`
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    @media screen and (min-width: 768px){
        padding: 0 2rem;
    }
`;

const StyledButtonActionWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const StyledPublishButton = styled.button`
    width: 50%;
    padding: 10px;
    outline: none;
    border: 1px solid #d9d9d9;
    cursor: pointer;
    border-radius: 19px 0 0 19px;
    border: none;
    background-color: #4793AF;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 16px;
`;

const StyledFormTitleAddNew = styled.h1`
    font-size: 24px;
    color: #FFC470;
    border-left: 7px solid #4793AF;
    padding-left: 6px;
`;

const StyledDraftButton = styled.button`
    width: 50%;
    padding: 10px;
    outline: none;
    border: 1px solid #d9d9d9;
    cursor: pointer;
    border-radius: 0 19px 19px 0;
    border: none;
    background-color: #FFFFF;
    color: #B5C0D0;
    font-weight: 700;
    font-size: 16px;
`;

const StyledHeroImageBottomSection = styled.img`
    width: 100%;
    height: auto;
    max-width: 400px;
`;

const StyledTextarea = styled.textarea`
    width: 100%;
    min-height: 150px;
    font-size: 13px;
    line-height: 1.7;
    border-color: #d9d9d9;
    outline: none;
    padding: 10px;
`;

const StyledInput = styled.input`
    border: 1px solid #d9d9d9;
    height: 50px;
    width: 100%;
    outline: none;
    padding: 10px;
`;

const StyledSelectOption = styled.select`
    width: 100%;
    padding: 10px;
    outline: none;
    border: 1px solid #d9d9d9;
`;

export {
    StyledSectionBottomContainer,
    StyledLeftBottomSection,
    StyledRightBottomSection,
    StyledHeroImageBottomSection,
    StyledTextarea,
    StyledInput,
    StyledSelectOption,
    StyledPublishButton,
    StyledDraftButton,
    StyledButtonActionWrapper,
    StyledFormTitleAddNew,

};