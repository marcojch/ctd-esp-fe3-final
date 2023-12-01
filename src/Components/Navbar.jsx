import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useCharContext} from '../Components/utils/global.context';  

const Navbar = () => {
  const { state, dispatch } = useCharContext()

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' }); 
  };

  return (
    <nav className={state.theme === 'dark' ? 'dark-theme' : 'light-theme'} >
      <Link to="/">Home</Link>
      <Link to="/favs">Favs</Link>
      <Link to="/contact">Contact</Link>
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar

{/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}