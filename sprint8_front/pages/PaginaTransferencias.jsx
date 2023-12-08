import Footer from "@/pages/Footer";
import Header from "@/components/Header/NavbarTop";
import NavbarLateral from "@/components/NavbarLateral/NavbarLateral";
import Transferencias from "@/components/Transferencias";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import cuentas from '../pages/cuentas/cuentas'


function PaginaTransferencias() {
    return ( 
        <>
        <header>
            <Header/>
        </header>
        <main>
            <NavbarLateral/>
            <Transferencias/>
        </main>
        <footer>
            <Footer/>
        </footer>
        </>
     );
}

export default PaginaTransferencias;