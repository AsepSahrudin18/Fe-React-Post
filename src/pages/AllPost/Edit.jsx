
import { StyledButtonActionWrapper, StyledDraftButton, StyledFormTitleAddNew, StyledHeroImageBottomSection, StyledInput, StyledLeftBottomSection, StyledPublishButton, StyledRightBottomSection, StyledSectionBottomContainer, StyledSelectOption, StyledTextarea } from "../AddNew/AddNew.styled";
// import { useParams } from 'react-router-dom';

function EditPost() {
    // const { id } = useParams();

    // console.log(id);
    return ( 
        <>
            <StyledSectionBottomContainer>
                {/* Left Section */}
                <StyledLeftBottomSection>
                    <StyledHeroImageBottomSection src={`../../images/bottom_section.svg`} alt="Image bottom"/>
                </StyledLeftBottomSection>

                {/* Right Section */}
                <StyledRightBottomSection>
                    <StyledFormTitleAddNew>Edit Article</StyledFormTitleAddNew>
                    <StyledInput placeholder="Title"/>
                    <StyledTextarea placeholder="Content.."></StyledTextarea>
                    <StyledSelectOption>
                        <option value="0">Select Category:</option>
                        <option value="1">Business</option>
                        <option value="2">Educations</option>
                    </StyledSelectOption>

                    <StyledButtonActionWrapper>
                        <StyledPublishButton>Publish</StyledPublishButton>
                        <StyledDraftButton>Draft</StyledDraftButton>
                    </StyledButtonActionWrapper>
                    
                </StyledRightBottomSection>
            </StyledSectionBottomContainer>
        </>
     );
}

export default EditPost;