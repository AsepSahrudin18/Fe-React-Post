import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AllPost from "../AllPost";
import StyledActionWrapper from "../Published/Published.styled";
import { StyledTabAllPostRedirect } from "../TabNavigationAllPost.styled";
import { StyledResponsive, StyledTableItem, StyledTd, StyledTh, StyledTr } from "../TablesItem";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

function Drafts() {
    return ( 
        <>
            <AllPost tabCategoryTitle="Drafts"/>
            <StyledResponsive>
                <StyledTableItem>
                    {/* Table Header Title */}
                    <thead>
                    <StyledTr>
                        <StyledTh>No</StyledTh>
                        <StyledTh>Title</StyledTh>
                        <StyledTh>Category</StyledTh>
                        <StyledTh>Action</StyledTh>
                    </StyledTr>
                    </thead>
                    
                    {/* Table Data */}
                    <tbody>
                    <StyledTr>
                        <StyledTd>1</StyledTd>
                        <StyledTd>Pemerataan Bisnis Diindonesia</StyledTd>
                        <StyledTd>Business</StyledTd>
                        <StyledTd>
                            <StyledActionWrapper>
                                <StyledTabAllPostRedirect href="/articles/trashed"><FontAwesomeIcon icon={faTrash} /> Delete</StyledTabAllPostRedirect>
                                <StyledTabAllPostRedirect href="/articles/edit/1"><FontAwesomeIcon icon={faEdit} /> Edit</StyledTabAllPostRedirect>
                            </StyledActionWrapper>
                        </StyledTd>
                    </StyledTr>
                    </tbody>
                </StyledTableItem>
            </StyledResponsive>
        </>
     );
}

export default Drafts;

