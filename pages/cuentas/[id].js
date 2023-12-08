import React, { useState } from 'react';
import { useRouter } from 'next/router';
import cuentas from '../cuentas/cuentas';
import Header from '@/components/Header/NavbarTop';
import Footer from '../Footer';
import NavbarLateral from '@/components/NavbarLateral/NavbarLateral';

function CuentaDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [monto, setMonto] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [cuentaDestinoId, setCuentaDestinoId] = useState('');

  const cuentasDestino = Object.values(cuentas).filter(c => c.id !== id);

  const handleTransferencia = async () => {
    const montoTransferencia = parseFloat(monto);

    if (isNaN(montoTransferencia) || montoTransferencia <= 0) {
      setMensaje('Ingrese un monto válido.');
      return;
    }

    if (!cuentas[id]) {
      setMensaje('Cuenta no encontrada.');
      return;
    }

    if (!cuentaDestinoId) {
      setMensaje('Seleccione una cuenta de destino.');
      return;
    }

    if (id === cuentaDestinoId) {
      setMensaje('No puedes transferir dinero a la misma cuenta.');
    } else if (cuentas[id].saldo - montoTransferencia < 0) {
      setMensaje('Saldo insuficiente en la cuenta.');
    } else {
      cuentas[id].saldo -= montoTransferencia;
      const cuentaDestino = cuentas[cuentaDestinoId];
      cuentaDestino.saldo += montoTransferencia;
      setMensaje(`Transferencia exitosa de $${montoTransferencia} a ${cuentaDestino.nombre}`);
    }
  };

  return (
    <>
      <header>
        <Header/>
      </header>

      <main>
        <NavbarLateral />
        <div className='DetallesCuentasDiv'>
          <h2>Detalles de la Cuenta Bancaria</h2>
          <p>Mostrando detalles para la cuenta con ID: {id}</p>
          <p>Nombre: {cuentas[id]?.nombre || 'Cuenta no encontrada'}</p>
          <p>Saldo Actual: ${cuentas[id]?.saldo || 'Cuenta no encontrada'}</p>

          <h3>Realizar Transferencia</h3>
          <label>Seleccione una cuenta de destino:</label>
          <select
            value={cuentaDestinoId}
            onChange={(e) => setCuentaDestinoId(e.target.value)}
          >
            <option value="">Seleccionar cuenta de destino</option>
            {cuentasDestino.map(c => (
              <option key={c.id} value={c.id}>
                {c.nombre}
              </option>
            ))}
          </select>
          <br />
          <input
            type="number"
            placeholder="Monto a transferir"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
          />
          <button onClick={handleTransferencia}>Transferir</button>
          <p>{mensaje}</p>

          <h3>Saldos Actualizados</h3>
          {Object.values(cuentas).map(c => (
            <p key={c.id}>{c.nombre}: ${c.saldo}</p>
          ))}
        </div>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default CuentaDetail;
