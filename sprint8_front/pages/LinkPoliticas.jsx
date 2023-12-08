import Footer from "./Footer";
import Politicas from "./Politicas";
import Header from "../components/Header/NavbarTop";
import NavbarLateral from "../components/NavbarLateral/NavbarLateral";

function LinkPoliticas() {
    return ( 
        <>
        <header>
            <Header/>
        </header>
        <main>
            <NavbarLateral/>
            <Politicas/>
        </main>
        <footer>
            <Footer/>
        </footer>
        </>
     );
}

export default LinkPoliticas;