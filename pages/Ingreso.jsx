import Footer from "./Footer";
import FormLogin from "../components/FormLogin";
import Header from "../components/Header/NavbarTop";

function Ingreso() {
    return ( 
        <>
        <header>
            <Header/>
        </header>
        <main>
            <FormLogin/>
        </main>
        <footer>
            <Footer/>
        </footer>
        </>
     );
}

export default Ingreso;