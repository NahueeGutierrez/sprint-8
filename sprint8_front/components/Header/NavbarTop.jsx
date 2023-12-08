import Link from 'next/link'
import Image from 'next/image'

function Header() {
    return (
        <>
        <nav className="navbar-top"> 
            <div className="logo">
                <p>BANCO</p>
                <p>BARRO</p>
                <img src="/images/logobanco.png" alt="Logo" />
            </div>
            <div className="links-nav">
                <Link href='/'>INICIO</Link>
                <Link href='/Ingreso'>MI CUENTA</Link>
            </div>
            </nav>
        </>
    );
}

export default Header;