import Link from 'next/link';

function FormLogin() {
    return (
        <>
        <div className="container">
        <h1>Inicio de sesión</h1>
            <form className="form" action="">
                <label htmlFor="dni">D.N.I:</label>
                <input type="number" id="dni" value={FormData.Dni} required />
                <label htmlFor="user">Usuario</label>
                <input type="text" id="user" value={FormData.User} required />
                <label htmlFor="password">contraseña</label>
                <input type="password" id="password" required />
            </form>
                <button className="button">INICIAR SESIÓN</button>
                <div className="link">
                    <p>¿No sos usuario de Banco Barro? </p>
                    <Link href="/Registro">Registrate acá</Link>
                </div>
        </div>
        </>
    );
}

export default FormLogin;