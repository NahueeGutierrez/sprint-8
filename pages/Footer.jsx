//import Facebook from '/images/facebook.png';
//import Instagram from '/images/instagram.png';
//import Twitter from '/images/twitter.png';
//import WhatsApp from '/images/whatsapp.png';
import Link from 'next/link'
import Image from 'next/image'



function Footer() {
    return (
        <>
    
            <div>
                <ul className="footer-list">
                    <li> <Link href='/TyC' >Términos y condiciones</Link> </li>
                    <li> <Link href='/Politicas'>Politicas de privacidad</Link> </li>
                    <li> <Link href='/Contacto'>Contacto</Link> </li>
                </ul>
            </div>
            <div className="footer-icons">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/facebook.png" alt="Logo de Facebook" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src="/images/instagram.png" alt="Logo de Instagram" />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src="/images/twitter.png" alt="Logo de Twitter" />
                </a>
                <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                    <img src="/images/whatsapp.png" alt="Logo de WhatsApp" />
                </a>
            </div>
        </>
    );
}

export default Footer;