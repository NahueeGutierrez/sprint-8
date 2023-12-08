import React, { useState } from 'react';

const AumentarLimite = ({ id }) => {
  const [solicitudEnviada, setSolicitudEnviada] = useState(false);

  const enviarSolicitud = async () => {
    try {
      const respuesta = await fetch(`http://localhost:3001/api/aumentarLimite/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (respuesta.ok) {
        setSolicitudEnviada(true);
      } else {
        console.error('Error al enviar la solicitud');
      }
    } catch (error) {
      console.error('Error de red', error);
    }
  };

  return (
    <div className='opcion-aumento'>
      <h1>Solicitar Aumento de Límite</h1>
      {!solicitudEnviada ? (
        <div>
          <p>Completa el formulario para solicitar un aumento de límite.</p>
          <button className='button' onClick={enviarSolicitud}>Enviar Solicitud</button>
        </div>
      ) : (
        <p>Solicitud enviada. Espera la respuesta.</p>
      )}
    </div>
  );
};

export default AumentarLimite;
