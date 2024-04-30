import React, { useState } from 'react';
import '../Diseños_css/Register.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faGraduationCap, faKey } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; // Importa la función necesaria de Firebase Auth

import appFirebase from '../credenciales';

const Register = () => {
  const navigate = useNavigate();
 
  const auth = getAuth(appFirebase);

  const [name, setName] = useState('');
  const [carrera, setCarrera] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // Nuevo estado para manejar errores

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Crea el usuario con email y contraseña
      await createUserWithEmailAndPassword(auth, email, password);
      
      // Si el inicio de sesión es exitoso, redirige al usuario a la página principal
      navigate('/MenuPrincipal', {
        replace: true,
        state: {
          logged: true,
          email
        }
      });
    } catch (error) {
      // Maneja cualquier error ocurrido durante el registro
      console.error("Error durante el registro:"); // Loguea el error en la consola para depuración
      setError(error.message); // Actualiza el estado de error con el mensaje del error
    }
  };

    // Constantes para manejar el estado de los campos de entrada
    const [isNameEmpty, setIsNameEmpty] = useState(true);
    const [isCarreraEmpty, setIsCarreraEmpty] = useState(true);
    const [isEmailEmpty, setIsEmailEmpty] = useState(true);
    const [isPasswordEmpty, setIsPasswordEmpty] = useState(true);
  
    // Funciones para manejar el foco y el desenfoque de los campos de entrada
    const handleNameFocus = () => setIsNameEmpty(false);
    const handleNameBlur = () => setIsNameEmpty(name === '');
    const handleCarreraFocus = () => setIsCarreraEmpty(false);
    const handleCarreraBlur = () => setIsCarreraEmpty(carrera === '');    
    const handleEmailFocus = () => setIsEmailEmpty(false);
    const handleEmailBlur = () => setIsEmailEmpty(email === '');
    const handlePasswordFocus = () => setIsPasswordEmpty(false);
    const handlePasswordBlur = () => setIsPasswordEmpty(password === '');
    
    // Funciones para capturar datos
    const handleNameChange = (e) => {
      setName(e.target.value);
      // Aquí puedes agregar el código para hacer que tu icono regrese
    };
  return (
    <div className="wrapper">
      <form className='form2'
            onSubmit={handleRegister}>
        
        <h1 className='register'>¡Regístrate!</h1>        

        <div className='input-group'>
          <label htmlFor='name'>Nombre:</label>
          <div className="input-icon">
            <input
              type='text'
              name='name'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => setCarrera(e.target.value)}
              onFocus={handleCarreraFocus} 
              onBlur={handleCarreraBlur}
              required
              autoComplete='off'
              placeholder={isCarreraEmpty ? '      Nombre de tu carrera'  :  ''}
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
              onChange={(e) => setEmail(e.target.value)}
              onFocus={handleEmailFocus}
              onBlur={handleEmailBlur}
              required
              autoComplete='off'
              placeholder={isEmailEmpty ? '     Ingresa tu correo electronico'  :  ''}
              className="appearance-none border-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {isEmailEmpty && <FontAwesomeIcon icon={ faEnvelope } className='input-icon-icon' />}
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
              onChange={(e) => setPassword(e.target.value)}
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordBlur}
              required
              autoComplete='off'
              placeholder={isPasswordEmpty ? '     Crea una contraseña segura'  :  ''} 
              className="appearance-none border-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {isPasswordEmpty && <FontAwesomeIcon icon={ faKey } className='input-icon-icon' />}
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
            <span className="terms-text">Acepto los</span> <Link to="/terminos-y-condiciones" className="terms-link">términos y condiciones</Link>
          </span>
        </div>

        {error && <div className="error-message">{error}</div>} 
       
       <div className='botonREG'>
        <button type="submit" className="btnR">Registrarse</button>
        </div>
      
      </form>
    </div>
  );
};

export default Register;
