import React from "react";
import { Link } from "react-router-dom";  
import { useCharContext } from '../Components/utils/global.context';



const Card = ({users, name, username, id }) => {
  
  const { state, dispatch } = useCharContext();
  const findFav = state.favs.find(fav => fav.id === users.id)
    
  
  const addFav = () => {

    if(findFav){
      alert('Ya agregaste ese elemento a favoritos')
    } else {
      dispatch({type: 'ADD_FAVORITE', payload: users})
      localStorage.setItem('favs', JSON.stringify(state.favs))
    }
  }

  return (
    <div className="card-grid" >
      
      <Link to={'/detail' + users.id}>Ver Dentista</Link>
      <h2>{users.name}</h2>
      <p>Username: {users.username}</p>
      <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;






