import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import io from 'socket.io-client';
import cuentas from '../pages/cuentas/cuentas'; 
import Header from "../components/Header/NavbarTop";
import Footer from "./Footer";
import Bienvenida from "../components/Main/Bienvenida";
import NavbarLateral from "../components/NavbarLateral/NavbarLateral";

const socket = io('http://localhost:3001'); 

function Inicio() {
  const [saldos, setSaldos] = useState({});

  useEffect(() => {
    socket.on('actualizarSaldo', (datosActualizados) => {
      setSaldos(datosActualizados);
    });

    return () => {
      socket.off('actualizarSaldo'); 
    };
  }, []);

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <NavbarLateral />
        <Bienvenida />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Inicio;
