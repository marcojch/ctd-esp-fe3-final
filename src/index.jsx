import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import GlobalContext from './Components/utils/global.context';  


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <GlobalContext>
          <App />
      </GlobalContext>
  </BrowserRouter>
)



