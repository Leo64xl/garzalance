import React from 'react'
import '../Diseños_css/Register.css';
import { useForm } from '../hook/useForm';
import { useNavigate } from 'react-router-dom';

const Register = () => {

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

  return (
  <div className="wrapper">
    <form onSubmit={onRegister}> 
      <h1 className='register'>Registrarse</h1>

      <div className='input-group'>
        <label htmlFor='name'>Nombre:</label>
        <input 
          type='text'
          name='name' 
          id='name' 
          value={name} 
          onChange={onInputChange} 
          required 
          autoComplete='off'        
        />
      </div>

      <div className='input-group'>
        <label htmlFor='name'>Carrera:</label>
        <input 
          type='text'
          name='carrera' 
          id='carrera' 
          value={carrera} 
          onChange={onInputChange} 
          required 
          autoComplete='off'        
        />
      </div>

      <div className='input-group'>
        <label htmlFor='email'>Email:</label>
        <input 
          type='email'
          name='email' 
          id='email' 
          value={email} 
          onChange={onInputChange} 
          required 
          autoComplete='off'        
        />
      </div>
      
      <div className='input-group'>
        <label htmlFor='password'>Contraseña:</label>
        <input 
          type='password'
          name='password' 
          id='password' 
          value={password} 
          onChange={onInputChange} 
          required 
          autoComplete='off'        
        />
      </div>
       
      <button>Registrarse</button>
    </form>
  </div>
)
}

export default Register