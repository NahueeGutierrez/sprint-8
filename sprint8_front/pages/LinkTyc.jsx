import Footer from "./Footer";
import TyC from "./Footer/TyC";
import Header from "../components/Header/NavbarTop";
import NavbarLateral from "../components/NavbarLateral/NavbarLateral";

function LinkTyc() {
    return ( 
        <>
        <header>
            <Header/>
        </header>
        <main>
            <NavbarLateral/>
            <TyC/>
        </main>
        <footer>
            <Footer/>
        </footer>
        </>
     );
}

export default LinkTyc;