import React from 'react'
import '../Diseños_css/Dashboard.css';
import { useForm } from '../hook/useForm';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

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

   return (
    <div className="wrapper">
      <form onSubmit={onLogin}> 
        <h1 className="iniciarS">Sign In</h1>
  
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
         
        <button className="btnS">Sign In</button>
      </form>
    </div>
  )
}

export default Dashboard