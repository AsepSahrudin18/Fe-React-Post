import Container from "../components/Container/Container";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

function Layout({children}) {
    return ( 
        <>
            <Navbar />
            <Container><main>{children}</main></Container>
            <Footer />
        </>
     );
}

export default Layout;