import Hero from "../../components/Globals/Hero/Hero";
import { StyledButtonActionWrapper, StyledDraftButton, StyledFormTitleAddNew, StyledHeroImageBottomSection, StyledInput, StyledLeftBottomSection, StyledPublishButton, StyledRightBottomSection, StyledSectionBottomContainer, StyledSelectOption, StyledTextarea } from "./AddNew.styled";
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert';

function AddNew() {
    const navigate = useNavigate() // untuk redirect halaman
    const [data, setData] = useState({
        title: '',
        content: '',
        category: '',
        status: '',
      });

    const [errors, setErrors] = useState({
        title: '',
        content: '',
        category: ''
    });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));

        // Clear error message when input changes
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: ''
        }));
      };

      const handleStatusChange = (status) => {
        setData(prevData => ({
          ...prevData,
          status: status
        }));
      };

      const resetForm = () => {
        setData({
          title: '',
          content: '',
          category: '',
          status: ''
        });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Validate form data
            if (!validateForm()) {
                // If validation fails, stop submission
                return;
            }

          const response = await axios.post('http://127.0.0.1:8000/api/article', data);
          console.log(response.data); // Assuming your API returns some data after creation
          // Do something with the response if needed
          resetForm();

        //   untuk redirect ke halaman berdasarkan status yang dipilih
          if (data.status === 'publish') {
            navigate('/articles/published');
          } else if (data.status === 'draft') {
            navigate('/articles/drafts');
          }

          // Show success message
            Swal({
                title: 'Success!',
                text: 'Your article has been created successfully.',
                icon: 'success'
            });
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error('Server responded with error:', error.response.data);
              } else if (error.request) {
                // The request was made but no response was received
                console.error('No response received:', error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error setting up the request:', error.message);
              }

              // Show error message
            Swal({
                title: 'Error!',
                text: 'Failed to create article.',
                icon: 'error'
            });
        }
      };


      const validateForm = () => {
        let isValid = true;
        const newErrors = {};
    
        // Title validation
        if (data.title.trim() === '' || data.title.length < 20) {
          newErrors.title = 'Title is required and must be at least 20 characters long';
          isValid = false;
        }
    
        // Content validation
        if (data.content.trim() === '' || data.content.length < 200) {
          newErrors.content = 'Content is required and must be at least 200 characters long';
          isValid = false;
        }
    
        // Category validation
        if (data.category.trim() === '' || data.category.length < 3) {
          newErrors.category = 'Category must be selected!';
          isValid = false;
        }
    
        setErrors(newErrors);
        return isValid;
      };

    return ( 
        <>
            <Hero />
            <form onSubmit={handleSubmit}>
            <StyledSectionBottomContainer>
                {/* Left Section */}
                <StyledLeftBottomSection>
                    <StyledHeroImageBottomSection src={`../images/bottom_section.svg`} alt="Image bottom"/>
                </StyledLeftBottomSection>

                {/* Right Section */}
                <StyledRightBottomSection>
                    <StyledFormTitleAddNew>Add New Article</StyledFormTitleAddNew>
                    
                    <StyledInput placeholder="Title" type="text"
                    name="title"
                    value={data.title}
                    onChange={handleChange}/>
                     {errors.title && <span style={{ color: 'red' }}>{errors.title}</span>}

                    <StyledTextarea name="content"
                    value={data.content}
                    onChange={handleChange} placeholder="Content.."></StyledTextarea>
                    {errors.content && <span style={{ color: 'red' }}>{errors.content}</span>}

                    <StyledSelectOption name="category"
                    value={data.category}
                    onChange={handleChange}>
                        <option value="0">Select Category:</option>
                        <option value="business">Business</option>
                        <option value="educations">Educations</option>
                        <option value="entertainment">Entertaintment</option>
                    </StyledSelectOption>
                    {errors.category && <span style={{ color: 'red' }}>{errors.category}</span>}

                    <StyledButtonActionWrapper>
                        <StyledPublishButton onClick={() => handleStatusChange('publish')}>Publish</StyledPublishButton>
                        <StyledDraftButton onClick={() => handleStatusChange('draft')}>Draft</StyledDraftButton>
                    </StyledButtonActionWrapper>
                    
                </StyledRightBottomSection>
            </StyledSectionBottomContainer>
            </form>
        </>
     );
}

export default AddNew;

