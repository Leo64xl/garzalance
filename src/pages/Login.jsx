import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { useForm } from '../hook/useForm';
import appFirebase from '../credenciales';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import '../Diseños_css/Login.css';

const auth = getAuth(appFirebase);

const Login = () => {
  const navigate = useNavigate();

  const { email, password, onInputChange } = useForm({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState(null); // Estado para almacenar el mensaje de error

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Inicia sesión con el correo electrónico y la contraseña proporcionados
      await signInWithEmailAndPassword(auth, email, password);
      // Si el inicio de sesión es exitoso, redirige al usuario a la página principal
      navigate('/MenuPrincipal',  {
        replace: true,
        state: {
          logged: true,
          email
        }
      });
    } catch (error) {
      // Maneja cualquier error ocurrido durante el inicio de sesión
      setErrorMessage("Error al iniciar sesión, ingresa datos válidos"); // Actualiza el estado del mensaje de error
      
    }
  };

  // Constantes para manejar el estado de los campos de entrada
  const [isEmailEmpty, setIsEmailEmpty] = useState(true);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(true);

  // Funciones para manejar el foco y el desenfoque de los campos de entrada
  const handleEmailFocus = () => setIsEmailEmpty(false);
  const handleEmailBlur = () => setIsEmailEmpty(email === '');
  const handlePasswordFocus = () => setIsPasswordEmpty(false);
  const handlePasswordBlur = () => setIsPasswordEmpty(password === '');

  return (
    <div className="wrapper">
      <form  className="form2" 
             onSubmit={handleLogin}>
        
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
              placeholder={isEmailEmpty ? '     Ingresa tu correo electronico'  :  ''} 
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
              placeholder={isPasswordEmpty ? '     Ingresa tu contraseña '  :  ''} 
              className="appearance-none border-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {isPasswordEmpty && <FontAwesomeIcon icon={faKey} className='input-icon-icon' />}
          </div>
        </div>
        
        <div className='notienes'>
          <span className="donthave">
            <span className="donthave-text">¿No tienes una cuenta?</span> <Link to="/registro-usuario" className="donthave-link">¡Regístrate!</Link>
          </span>        
        </div>

        <div className='mensajeal'>
         {errorMessage && <div className="error-messagee">{errorMessage}</div>}
        </div>

       <div className='botonAc'>
        <button type="submit" className="btnS">Acceder</button>
        </div>
      </form>    
    </div>
  );
}

export default Login;
