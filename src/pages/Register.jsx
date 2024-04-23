import React, { useState } from 'react';
import '../Diseños_css/Register.css';
import { useForm } from '../hook/useForm';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Register = () => {3
  
  const navigate = useNavigate();

  const {name, carrera, email, password, onInputChange, onResetForm} = 
  useForm({
    name: '',
    carrera: '',
    email: '',
    password: '',
  })

    const onRegister = (e) => {
     e.preventDefault()

     navigate('/MenuPrincipal', {
      replace:true,
      state: {
        logged: true,
        name
      }
    })
    
    onResetForm();
    }

    //estas son constantes para los iconos no se espanten 
    const [isNameEmpty, setIsNameEmpty] = useState(true);

    const handleNameFocus = () => {
    setIsNameEmpty(false);
   };

    const handleNameBlur = () => {
    setIsNameEmpty(name === '');
   };
    
   //carrera
   const [isCarreraEmpty, setIsCarreraEmpty] = useState(true);

    const handleCarreraFocus = () => {
    setIsCarreraEmpty(false);
   };

    const handleCarreraBlur = () => {
    setIsCarreraEmpty(carrera === '');
   };

   //email
   const [isEmailEmpty, setIsEmailEmpty] = useState(true);

    const handleEmailFocus = () => {
    setIsEmailEmpty(false);
   };

    const handleEmailBlur = () => {
    setIsEmailEmpty(email === '');
   };

   //contraseña 
   const [isPasswordEmpty, setIsPasswordEmpty] = useState(true);

    const handlePasswordFocus = () => {
    setIsPasswordEmpty(false);
   };

    const handlePasswordBlur = () => {
    setIsPasswordEmpty(password === '');
   };

  return (
  <div className="wrapper">
    <form onSubmit={onRegister}> 
      <h1 className='register'>¡Registrate!</h1>

      <div className='input-group'>     
      <label htmlFor='name'>Nombre:</label> 
         <div className="input-icon">
           <input 
            type='text'
            name='name' 
            id='name' 
            value={name}             
            onChange={onInputChange} 
            onFocus={handleNameFocus} 
            onBlur={handleNameBlur}
            required 
            autoComplete='off' 
            placeholder={isNameEmpty ? '     Ingresa tu nombre completo' : ''}
            className="appearance-none border-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pl-10"       
          />
      {isNameEmpty && <FontAwesomeIcon icon={ faUser } className="input-icon-icon" />}
    </div>
 </div>

      <div className='input-group'>
        <label htmlFor='name'>Carrera:</label>
        <div className="input-icon">
        <input 
          type='text'
          name='carrera' 
          id='carrera' 
          value={carrera} 
          onChange={onInputChange} 
          onFocus={handleCarreraFocus} 
          onBlur={handleCarreraBlur}          
          required 
          autoComplete='off' 
          placeholder={isCarreraEmpty ? '     Nombre de tu carrera'  :  ''} 
          className="appearance-none border-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"       
        />
        {isCarreraEmpty && <FontAwesomeIcon icon={ faGraduationCap } className="input-icon-icon" />}
        </div> 
      </div>
      
      <div className='input-group'>
        <label htmlFor='email'>E-Mail:</label>
        <div className="input-icon">
        <input 
          type='email'
          name='email' 
          id='email' 
          value={email} 
          onChange={onInputChange}
          onFocus={handleEmailFocus} 
          onBlur={handleEmailBlur} 
          required 
          autoComplete='off'
          placeholder={isEmailEmpty ? '     Ingresa tu correo electrico'  :  ''} 
          className="appearance-none border-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"        
        />
        {isEmailEmpty && <FontAwesomeIcon icon={ faEnvelope } className="input-icon-icon" />}
        </div>        
      </div>
      
      <div className='input-group'>        
        <label htmlFor='password'>Contraseña:</label>
        <div className="input-icon">
        <input 
          type='password'
          name='password' 
          id='password' 
          value={password} 
          onChange={onInputChange} 
          onFocus={handlePasswordFocus}
          onBlur={handlePasswordBlur}
          required 
          autoComplete='off'        
          placeholder={isPasswordEmpty ? '     Crea una contraseña segura'  :  ''} 
          className="appearance-none border-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {isPasswordEmpty && <FontAwesomeIcon icon={faKey} className='input-icon-icon' />}
        </div>
      </div>

      <div className="checkbox-container">
  <input 
    type='checkbox'
    id='terms'
    required
    className='checkC'
  />
 <span className="terms">
    <span className="terms-text">Acepto los</span> <Link to="/terminos-y-condiciones" className="terms-link">terminos y condiciones</Link>
  </span>
</div>
       
      <button className="btnR">Registrarse</button>
    </form>   
      
    
  </div>
 )
};

export default Register