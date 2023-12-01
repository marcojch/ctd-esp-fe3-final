import React from "react";
import { Link } from "react-router-dom";  
import { useCharContext } from '../Components/utils/global.context';



const Card = ({character, name, username, id }) => {
  
  const { state, dispatch } = useCharContext();
  const findFav = state.favs.find(fav => fav.id === character.id)
    
  
  const addFav = () => {

    if(findFav){
      alert('Ya agregaste ese elemento a favoritos')
    } else {
      dispatch({type: 'ADD_FAVORITE', payload: character})
      localStorage.setItem('favs', JSON.stringify(state.favs))
    }
  }

  return (
    <div className="card">
      
      <Link to={`/dentist/${id}`}>Ver Dentista </Link>
      <h2> {name} </h2>
      <p>Username: {username}</p>
      <button onClick={addFav} className="favButton">Add fav</button>

    </div>
  );
};

export default Card;






