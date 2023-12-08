import Contacto from "./Contacto";
import Footer from "./Footer";
import Header from "../components/Header/NavbarTop";
import NavbarLateral from "../components/NavbarLateral/NavbarLateral";
import FormAyuda from "@/components/FormularioAyuda"

function LinkContacto() {
    return ( 
        <>
        <header>
            <Header/>
        </header>
        <main>
            <NavbarLateral/>
            <Contacto/>
            <FormAyuda/>
        </main>
        <footer>
            <Footer/>
        </footer>
        </>
     );
}

export default LinkContacto;