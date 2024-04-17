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
      <h1>Iniciar sesión</h1>

      <div className='input-group'>
       <input 
         type='text'
         name='name' 
         id='name' 
         value={name} 
         onChange={onInputChange} 
         required 
         autoComplete='off'        
       />
       <label htmlFor='name'>Nombre:</label>
      </div>

      <div className='input-group'>
       <input 
         type='email'
         name='email' 
         id='email' 
         value={email} 
         onChange={onInputChange} 
         required 
         autoComplete='off'        
       />
       <label htmlFor='email'>Email:</label>
      </div>
      
      <div className='input-group'>
       <input 
         type='password'
         name='password' 
         id='password' 
         value={password} 
         onChange={onInputChange} 
         required 
         autoComplete='off'        
       />
       <label htmlFor='password'>Contraseña:</label>
      </div>
       
       <button>Entrar</button>
     </form>
    </div>
  )
}

export default Dashboard