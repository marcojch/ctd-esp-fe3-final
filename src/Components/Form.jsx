import React, { useState } from 'react';

  //Aqui deberan implementar el form completo con sus validaciones

  const Form = () => {
    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
    });
  
    const [formErrors, setFormErrors] = useState({
      fullNameError: '',
      emailError: '',
      submitted: false,
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // para validar el formulario completo
      let valid = true;
      const errors = {
        fullNameError: '',
        emailError: '',
      };

      // aca se valida el largo del nombre

      if (formData.fullName.length < 5) {
        valid = false;
        errors.fullNameError = 'El nombre completo debe tener más de 5 caracteres.';
      }
       
     // validamos que el mail este bien esrito
    
       const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(formData.email)) {
      valid = false;
      errors.emailError = 'Por favor verifique su información nuevamente.';
    }

    if (valid) {
      console.log(`Formulario correcto`, formData);
      setFormErrors({
        ...formErrors,
        submitted: true,
      });
    } else {
      setFormErrors(errors);
    }
  }


  return (
    <div>
      
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
      <div>
      <label htmlFor="fullName">Nombre Completo:</label>
      <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
      />
      {formErrors.fullNameError && <p>{formErrors.fullNameError}</p>}
      </div>

      <div>
      <label htmlFor="email">Email:</label>
      <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
      />  
      {formErrors.emailError && <p>{formErrors.emailError}</p>}
      </div>
      
      <button type="submit">Enviar</button> 
      </form>
      {formErrors.submitted && (
        <p>Gracias {formData.fullName}, te contactaremos pronto vía email.</p>
      )}
       </div>
  );
};


export default Form;

