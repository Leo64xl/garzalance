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
      <h1 className='register'>Sign Up</h1>

      <div className='input-group'>
        <label htmlFor='name'>Full name:</label>
        <input 
          type='text'
          name='name' 
          id='name' 
          value={name} 
          onChange={onInputChange} 
          required 
          autoComplete='off' 
          placeholder='Enter your full name' // Añade esto
          className="appearance-none border-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"       
        />
      </div>

      <div className='input-group'>
        <label htmlFor='name'>Career:</label>
        <input 
          type='text'
          name='carrera' 
          id='carrera' 
          value={carrera} 
          onChange={onInputChange} 
          required 
          autoComplete='off' 
          placeholder='Enter your college career' // Añade esto
          className="appearance-none border-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"       
        />
      </div>

      <div className='input-group'>
        <label htmlFor='email'>E-Mail:</label>
        <input 
          type='email'
          name='email' 
          id='email' 
          value={email} 
          onChange={onInputChange} 
          required 
          autoComplete='off'
          placeholder='Enter your email address' // Añade esto
          className="appearance-none border-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"        
        />
      </div>
      
      <div className='input-group'>
        <label htmlFor='password'>Password:</label>
        <input 
          type='password'
          name='password' 
          id='password' 
          value={password} 
          onChange={onInputChange} 
          required 
          autoComplete='off'        
          placeholder='*******' // Añade esto
          className="appearance-none border-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
       
      <button className="btnR">Sign Up</button>
    </form>
  </div>
)
}

export default Register