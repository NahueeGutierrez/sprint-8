

function ConversorEuro() {
    return (
        <>
            <div className="container">
                <h1 className="textoPesoDolar">Convertidor de Moneda:</h1>
                <h2>Peso Argentino/Euro</h2>
                <label>Ingresá la cantidad:</label>
                <br />
                <input type="number" id="cantidadEuro" />
                <label>Seleccioná la moneda:</label>
                <select id="monedaEuro">
                    <option value="pesoArgEuro">PESO ARG</option>
                    <option value="euro">EURO</option>
                </select>
                <br />
                <button className="button" onclick="convertirEuro()">Convertir</button>
                <p id="resultadoEuro"></p>
                <Link to='/conversor-dolar'>Convertir Peso Argentino/Dólar.</Link>
                
            </div>
        </>
    );
}

export default ConversorEuro;