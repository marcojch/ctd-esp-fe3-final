import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useCharContext } from '../Components/utils/global.context';  


const Detail = () => {
  const { state } = useCharContext()
  const [dentist, setDentist] = useState({});
  const { id } = useParams();
  
  
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
