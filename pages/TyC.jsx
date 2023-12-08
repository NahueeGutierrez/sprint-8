import Header from "@/components/Header/NavbarTop";
import Footer from "./Footer";
import NavbarLateral from "@/components/NavbarLateral/NavbarLateral";

function TyC() {
    return (
        <>
        <header>
            <Header/>
        </header>
        <main>
            <NavbarLateral/>
            <div className="info">
                <h1>Términos y Condiciones</h1>

                <h3>1. Introducción</h3>
                <p>Estos términos y condiciones rigen el uso de nuestros servicios y sitio web. Al acceder y utilizar nuestros servicios, aceptas estos términos y condiciones en su totalidad.</p>

                <h3>2. Uso de Contenido</h3>
                <p>Todo el contenido de este sitio web es propiedad de [Nombre de la Compañía]. No está permitida la reproducción sin autorización previa.</p>

                <h3>3. Responsabilidad</h3>
                <p>No nos hacemos responsables de pérdidas o daños derivados del uso de nuestros servicios o información proporcionada en este sitio.</p>

                <h3>4. Privacidad</h3>
                <p>La información personal proporcionada será tratada de acuerdo con nuestra Política de Privacidad. Al utilizar nuestros servicios, aceptas los términos de dicha política.</p>

                <h3>5. Modificaciones</h3>
                <p>Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Los cambios entrarán en vigencia al ser publicados en este sitio web.</p>

                <h3>6. Ley Aplicable</h3>
                <p>Estos términos y condiciones se rigen por las leyes de Argentina. Cualquier disputa estará sujeta a la jurisdicción de los tribunales de [ciudad].</p>

                <h3>7. Contacto</h3>
                <p>Si tienes alguna pregunta sobre estos términos y condiciones, puedes contactarnos a través de la información proporcionada en nuestro sitio web.</p>
            </div>
        </main>

            <footer>
                <Footer/>
            </footer>
        </>
    );
}

export default TyC;