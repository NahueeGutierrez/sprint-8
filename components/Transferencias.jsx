// function Transferencias() {
//     return (
//         <>
//         <div className="container-pagos">

//             <section className="secciones">
//                 <div>
                 
//                 </div>
//             </section>
//         </div>
//         </>

//     );
// }

// export default Transferencias;

import React,{ useState, useEffect} from 'react';
import Link from 'next/link'; 
import cuentas from '../pages/cuentas/cuentas'; 
import axios from 'axios';

function Transferencias() {
  /*const[cuentas,setCuentas]=useState([]);

  useEffect(()=>{
    
    axios.get('http://127.0.0.1:8000/api/transferencias')
      .then(response=>{
        setCuentas(response.data);
      })
      .catch(error=>{
        console.error('Error al obtener datos',error);
      });
  },[]);*/

  return (
    <>
      <div className="container-pagos">
        <section className="secciones">
          <div>
            <h1>Detalles de las Cuentas</h1>
            <ul>
              {Object.values(cuentas).map((cuenta) => (
                <li key={cuenta.id}>
                  <Link href={`/cuentas/${cuenta.id}`}>
                    
                      <p>Nombre: {cuenta.nombre}</p>
                    
                  </Link>
                  <p>Saldo: ${cuenta.saldo}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

export default Transferencias;
