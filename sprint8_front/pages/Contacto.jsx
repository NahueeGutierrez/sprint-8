import Header from "@/components/Header/NavbarTop";
import Footer from ".//Footer";
import NavbarLateral from "@/components/NavbarLateral/NavbarLateral";
import FormAyuda from "@/components/FormularioAyuda";


function Contacto() {
    return (
        <>
        <header>
                <Header/>
        </header>
        
        
        <div className="info">
            <h1>Contacto</h1>
            <p><strong>Dirección:</strong> Calle de tierra 176</p>
            <p><strong>Teléfono:</strong><a href="https://youtu.be/31C29nzGELo?feature=shared&t=16" target="_blank"> 5353456-1509nnananrna</a></p>
            <p><strong>Correo Electrónico:</strong> barrobank@contacto.com</p>
        </div>

{/* Agregar clase y revisar ccs para el form */}
            <h1>Completar el formulario para mas ayuda</h1>
            <br/>
        <div className="form-ayuda"> 
            <FormAyuda/>
        </div>
<hr />
        <footer>
                <Footer/>
        </footer>
        </>
    );
}

export default Contacto;