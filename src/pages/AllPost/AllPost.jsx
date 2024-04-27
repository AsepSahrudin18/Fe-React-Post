import Hero from "../../components/Globals/Hero/Hero";
import { 
    StyledNavigationAllPost, 
    StyledCategoryTitleAllPost, 
    StyledTabListAllPost, 
    StyleTabItemAllPost, 
    StyledTabAllPostRedirect
} from "./TabNavigationAllPost.styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faPaperPlane, 
    faFile, 
    faTrash, 
    
} from '@fortawesome/free-solid-svg-icons';

function AllPost({tabCategoryTitle}) {
    return ( 
        <>
            <Hero />

            <StyledNavigationAllPost>
                <StyledCategoryTitleAllPost>{tabCategoryTitle}</StyledCategoryTitleAllPost>
                <StyledTabListAllPost>
                    {/* tabs */}
                    <StyleTabItemAllPost>
                        <StyledTabAllPostRedirect href="/articles/published"><FontAwesomeIcon icon={faPaperPlane} /> Published</StyledTabAllPostRedirect>
                        </StyleTabItemAllPost>
                    <StyleTabItemAllPost>
                        <StyledTabAllPostRedirect href="/articles/drafts"><FontAwesomeIcon icon={faFile} /> Drafts</StyledTabAllPostRedirect></StyleTabItemAllPost>
                    <StyleTabItemAllPost>
                        <StyledTabAllPostRedirect href="/articles/trashed"><FontAwesomeIcon icon={faTrash} /> Trashed</StyledTabAllPostRedirect>
                    </StyleTabItemAllPost>
                </StyledTabListAllPost>
            </StyledNavigationAllPost>
        </>
     );
}

export default AllPost;