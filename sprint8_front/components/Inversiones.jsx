import React, {useState} from "react";
function Inversiones() {
    const [resultado, setResultado] =useState('');

    function calcular() {
        let tasaDeInteres = 1.18;
        let montoFinal = parseFloat(document.getElementById("monto").value);
        let plazoFinal = parseInt(document.getElementById("cuotas").value)        
        let intereMensual = montoFinal * tasaDeInteres;
        let totalAPagar = montoFinal + intereMensual * plazoFinal;
        setResultado("Total a pagar en " + plazoFinal + " meses: $ " + totalAPagar.toFixed(2))
    }


    return (
        <>
            <div className="container">
                <h1>Calcular préstamos</h1>
                <label>Ingresá el monto del préstamo:</label>
                <br />
                <input type="number" id="monto" />
                <label>Seleccioná el plazo en meses:</label>
                <select id="cuotas">
                    <option value="12">12 meses</option>
                    <option value="18">18 meses</option>
                    <option value="24">24 meses</option>
                </select>
                <br />
                <button className="button" onClick={calcular}>Calcular</button>
                <p>{resultado}</p>
                <br />
                <p className="cursiva">La tasa de interés semestral es de un 118%</p>
            </div>
        </>

    );
}

export default Inversiones;