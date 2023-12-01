import React from "react";
import Card from "../Components/Card";
import { useCharContext } from '../Components/utils/global.context';   

const Favs = () => {
  const { state } = useCharContext();
  const { theme } = state;
  const favDentists = JSON.parse(localStorage.getItem('favDentists')) || [];

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

