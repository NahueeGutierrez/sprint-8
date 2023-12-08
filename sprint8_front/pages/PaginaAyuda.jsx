import Ayuda from "../components/Ayuda";
import Footer from "./Footer";
import Header from "../components/Header/NavbarTop";
import NavbarLateral from "../components/NavbarLateral/NavbarLateral";


function PaginaAyuda() {
    return ( 
        <>
            <header>
                <Header/>
            </header>
            <main className="main-ayuda">
                <NavbarLateral/>
                <Ayuda/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
     );
}

export default PaginaAyuda;