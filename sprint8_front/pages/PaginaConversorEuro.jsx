import ConversorEuro from "../components/ConversorEuro";
import Footer from "./Footer";
import Header from "../components/Header/NavbarTop";
import NavbarLateral from "../components/NavbarLateral/NavbarLateral";

function PaginaConversorEuro() {
    return ( 
        <>
        <header>
            <Header/>
        </header>
        <main>
            <NavbarLateral/>
            <ConversorEuro/>
        </main>
        <footer>
            <Footer/>
        </footer>
        </>
     );
}

export default PaginaConversorEuro;