import React, { useState } from 'react';

const Pagar = ({onPagoRealizado}) => {
  const [monto, setMonto] = useState('');
  const [pagoRealizado, setPagoRealizado] = useState(false);
  const procesarPago = () => {
    onPagoRealizado(monto);
  }

  return (
    <div className='opcion-pagar'>
      <h1>Realizar Pago</h1>
      {!pagoRealizado ? (
        <div >
          <input className='input-pago'
            type="number"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
            placeholder="Monto a pagar"
          /> 
          <button className='button' onClick={procesarPago}>Pagar</button>
        </div>
      ) : (
        <p>Pago realizado con éxito.</p>
      )}
    </div>
  );
};

export default Pagar;
