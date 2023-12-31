import React from 'react'; 
import Form from '../Components/Form';
import { useCharContext } from '../Components/utils/global.context';  


const Contact = () => {
  const { state } = useCharContext()

  return (
    <div className={state.theme === 'dark' ? 'dark-theme' : 'light-theme'}>
      <h2>Esta es la pagina de contacto</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact;

