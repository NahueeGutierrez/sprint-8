import Link from 'next/link';

function FormRegistro() {
    return (
        <>
        <div className="container2"> 
        <h1>Registrate</h1>
            <form className="form" action="">
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" value={FormData.Nombre} required />
                <label htmlFor="dni">D.N.I:</label>
                <input type="number" id="dni" value={FormData.Dni} required />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={FormData.Email} required />
                <label htmlFor="birth">Fecha de nacimiento</label>
                <input type="date" id="birth" value={FormData.Birth} ></input>
                <label htmlFor="user"> Cree un usuario</label>
                <input type="text" id="user" value={FormData.User} />
                <label htmlFor="password">Cree una contraseña</label>
                <input type="password" id="password" value={FormData.Password} />
                <label htmlFor="passwordc">Vuelva a ingresar la contraseña</label>
                <input type="password" id="passwordc" value={FormData.Passwordc} />
            </form>
            <div className="link">
                <p>¿Ya tenés cuenta? </p>
                <Link href="/Ingreso">Inicia sesión acá</Link>
            </div>
        </div>
        </>
    );
}

export default FormRegistro;
