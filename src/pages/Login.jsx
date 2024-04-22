import React, { useState } from 'react';
import '../Diseños_css/Login.css';
import { useForm } from '../hook/useForm';
import { useNavigate } from 'react-router-dom';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


const Login = () => {

  const navigate = useNavigate();

  const {name, email, password, onInputChange, onResetForm} = 
  useForm({
    name: '',
    email: '',
    password: '',
  })

   const onLogin = (e) => {
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
   const [isEmailEmpty, setIsEmailEmpty] = useState(true);

    const handleEmailFocus = () => {
    setIsEmailEmpty(false);
   };

    const handleEmailBlur = () => {
    setIsEmailEmpty(email === '');
   };

   //password
   const [isPasswordEmpty, setIsPasswordEmpty] = useState(true);

   const handlePasswordFocus = () => {
    setIsPasswordEmpty(false);
   };

    const handlePasswordBlur = () => {
    setIsPasswordEmpty(password === '');
   };


   return (
    <div className="wrapper">
      
      <form onSubmit={onLogin}> 
        <h1 className="iniciarS">¡Bienvenido!</h1>     
        
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
            placeholder={isEmailEmpty  ?  '     Ingresa tu correo electronico '  : ''}
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
            placeholder={isPasswordEmpty  ?  '     Ingresa tu contraseña'  :  ''} 
            className="appearance-none border-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"     
          />
           {isPasswordEmpty && <FontAwesomeIcon icon={ faKey } className="input-icon-icon" />}
          </div>
        </div>

        <span className="donthave">
           <span className="donthave-text">¿No tienes una cuenta?</span> <Link to="/registro-usuario" className="donthave-link">¡Registrate!</Link>
        </span>
         
        <button className="btnS">Acceder</button>        
      </form>
    </div>
  )
}

export default Login