import Footer from "@/pages/Footer";
import Header from "@/components/Header/NavbarTop";
import NavbarLateral from "@/components/NavbarLateral/NavbarLateral";
import Pagos from "@/components/pagos";

function PaginaPagos() {
    return ( 
        <>
        <header>
            <Header/>
        </header>
        <main>
            <NavbarLateral/>
            <Pagos/>
        </main>
        <footer>
            <Footer/>
        </footer>
        </>
     );
}

export default PaginaPagos;