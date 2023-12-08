import Header from "@/components/Header/NavbarTop";
import Footer from "./Footer";
import NavbarLateral from "@/components/NavbarLateral/NavbarLateral";


function Politicas() {
    return (
        <>
            <header>
                <Header/>
            </header>
            <main>
                <NavbarLateral/>

                <div className="info">
                    <h1>Politicas de Privacidad del Banco Barro</h1>
                    <p>Fecha de última actualización: 17 de agosto del 2023</p>
                    <h3>Recopilación de Información Personal</h3>

                    <p>Recopilamos información personal de nuestros clientes cuando se registran en nuestros servicios, solicitan
                        productos financieros, realizan transacciones o interactúan con nuestro sitio web y aplicaciones. La información
                        personal que recopilamos puede incluir, entre otros:
                    </p>
                    <ul>
                        <li>Nombre y apellidos</li>
                        <li>Dirección de correo electrónico</li>
                        <li>Número de teléfono</li>
                        <li>Dirección postal</li>
                        <li>Información de cuentas bancarias y financieras</li>
                        <li>Información de transacciones</li>
                    </ul>
                    <h3>Uso de la Información</h3>

                    <p>Utilizamos la información personal recopilada para los siguientes propósitos:</p>
                    <ul>
                        <li>Procesar solicitudes de productos y servicios</li>
                        <li>Administrar cuentas de clientes y transacciones</li>
                        <li>Proporcionar asistencia al cliente</li>
                        <li>Personalizar la experiencia del usuario</li>
                        <li>Enviar comunicaciones relacionadas con servicios y ofertas especiales</li>
                        <li>Cumplir con las obligaciones legales y regulatorias</li>
                    </ul>
                    <br></br>
                    <h3>Protección de la Información</h3>
                    
                    <p>Mantenemos medidas de seguridad técnicas y organizativas para proteger la información personal de nuestros
                        clientes contra el acceso no autorizado, la divulgación o la alteración. Empleamos encriptación, firewalls y
                        procedimientos de seguridad avanzados para salvaguardar la información sensible.
                    </p>
                    <br/>
                    <h3>Divulgación a Terceros</h3>
                    <p>
                        No compartimos información personal de nuestros clientes con terceros no afiliados, excepto cuando sea necesario
                        para proporcionar servicios solicitados por el cliente o cuando estemos obligados por la ley.
                    </p>
                    <br/>
                    <h3>Derechos de Privacidad y Elección</h3>
                    <p>
                        Los clientes tienen el derecho de acceder, corregir y eliminar su información personal. También pueden optar por
                        no recibir comunicaciones de marketing. 
                    </p>
                    <br/>
                    <h3>Cambios en la Política de Privacidad</h3>
                    <p>
                        Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. 
                    </p>
                    <p>
                        Si tienes alguna pregunta sobre nuestra Política de Privacidad o sobre cómo manejamos la información personal,
                        no dudes en ponerte en contacto con nosotros a través de la información de contacto proporcionada en nuestro
                        sitio web.
                    </p>
                </div>
                </main>
            <footer>
                <Footer/>
            </footer>
        </>
    );
}

export default Politicas;