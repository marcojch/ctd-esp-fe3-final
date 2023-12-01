import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useCharContext } from '../Components/utils/global.context';  


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context 

const Detail = () => {
  const { state } = useCharContext()
  
    
  const [dentist, setDentist] = useState({});
  const { id } = useParams();
  
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        setDentist(response.data);
      })
  }, [id]);

  return (
    <>
      <h1>Detalle del dentista seleccionado {id}</h1>
      {dentist && (
        <div>
          <h2>{dentist.name}</h2>
          <p>Email: {dentist.email}</p>
          <p>Phone: {dentist.phone}</p>
          <p>Website: {dentist.website}</p>
      </div>
      )}
    </>
     

  );
}

export default Detail

{/* aqui deberan renderizar la informacion en detalle de un user en especifico HECHO CON USE EFFECT*/}
{/* Deberan mostrar el name - email - phone - website por cada user en especifico | Hecho dentreo del DIV*/}