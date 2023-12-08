import ConversorDolar from "../components/ConversorDolar";
import Footer from "./Footer";
import Header from "../components/Header/NavbarTop";
import NavbarLateral from "../components/NavbarLateral/NavbarLateral";


function PaginaConversorDolar() {
    return ( 
        <>
        <header>
            <Header/>
        </header>
        <main>
            <NavbarLateral/>
            <ConversorDolar/>
        </main>
        <footer>
            <Footer/>
        </footer>
        </>
     );
}

export default PaginaConversorDolar;