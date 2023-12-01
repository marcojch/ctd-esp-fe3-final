import React from "react";
import Card from "../Components/Card";
import { useCharContext } from '../Components/utils/global.context';   


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Favs = () => {
  const { state } = useCharContext();
  const { theme } = state;
  const favDentists = JSON.parse(localStorage.getItem('favDentists')) || [];
  
  // REVISAR STATE


  return (
    <>
      <h1>Dentists Favs</h1>
      <div className={`card-grid ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      {favDentists.map((dentist, index) => (
      <Card
        key={index} 
        name={dentist.name}
        username={dentist.username}
        id={dentist.id}
      />
))}
</div>
    </>
  );
};

export default Favs;

 {/* este componente debe consumir los destacados del localStorage  LISTO? */}
        {/* Deberan renderizar una Card por cada uno de ellos (CON MAP) LISTOO*/}