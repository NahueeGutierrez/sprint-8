import React, { useState } from 'react';
import Header from '@/components/Header/NavbarTop';
import NavbarLateral from '@/components/NavbarLateral/NavbarLateral';
import Footer from './Footer';

function CreditCardDetail() {
  const [saldo, setSaldo] = useState(5000);
  const [error, setError] = useState(null);

  const servicios = [
    { id: 1, nombre: 'Luz', monto: 1000 },
    { id: 2, nombre: 'Agua', monto: 500 },
  ];

  const realizarPagoServicio = (servicio) => {
    const nuevoSaldo = saldo - servicio.monto;
    if (nuevoSaldo < 0) {
      alert('Saldo insuficiente para pagar este servicio.');
    } else {
      setSaldo(nuevoSaldo);
      setError(null);
    }
  };

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <NavbarLateral />
        <div className='facturas'>
          <h2>Detalles de la Tarjeta de Crédito</h2>
          <p>Saldo Actual: ${saldo}</p>

          <h3>Realizar Pago de Servicios</h3>
          <ul>
            {servicios.map((servicio) => (
              <li key={servicio.id}>
                {servicio.nombre} - Monto: ${servicio.monto}
                <button onClick={() => realizarPagoServicio(servicio)}>
                  Pagar
                </button>
              </li>
            ))}
          </ul>

          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default CreditCardDetail;
