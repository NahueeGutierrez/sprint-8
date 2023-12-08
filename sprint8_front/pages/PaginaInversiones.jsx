import Footer from "./Footer";
import Header from "../components/Header/NavbarTop";
import Inversiones from "../components/Inversiones";
import NavbarLateral from "../components/NavbarLateral/NavbarLateral";

function PaginaInversiones() {
    return ( 
        <>
        <header>
            <Header/>
        </header>
        <main>
            <NavbarLateral/>
            <Inversiones/>
        </main>
        <footer>
            <Footer/>
        </footer>
        </>
     );
}

export default PaginaInversiones;