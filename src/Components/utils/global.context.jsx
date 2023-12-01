import React, { createContext, useReducer, useEffect, useContext} from "react";
import axios from 'axios';

//PARA EL TEMA Y FAVS

const CharContext = createContext()

const initialState = {
  theme: "light",
  list: [],
  favs: JSON.parse(localStorage.getItem('favs')) || [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    case "GET_USERS":
      return {
        ...state,
        list: action.payload,
      };
    case "ADD_FAVORITE":
      return {
        ...state,
        favs: [...state.favs, action.payload],
      };
    default:
      return state;
  }
};

//implementacon de api


const GlobalContext = ({ children }) => {
 
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);
  const url = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    axios(url)
      .then(res => dispatch({ type: 'GET_USERS', payload: res.data.results }))
  }, []);

   useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(state.favs))
     }, [state.favs])

  return (
    <CharContext.Provider value={{ state, dispatch }}>
      {children}
    </CharContext.Provider>
  );
};

export default GlobalContext;

export const useCharContext = () => useContext(CharContext);


