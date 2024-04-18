import { Outlet, NavLink, useLocation, useNavigate } from 'react-router-dom'

const Layout = () => {

  const {state} = useLocation();
  const navigate = useNavigate()

  console.log(state)

  const onLogout = () => {
    navigate('/dashboard', {
      replace:true,
    })
  }

  return (
    <div>    

    {
      state?.logged ? (
       <div className="user">
         <span className="username">{state?.name}</span>
         <button className="btn-logout" onClick={onLogout}>
         Cerrar sesión
         </button>
       </div>

      ) : (
       
        <nav className="secciones_nav">
        <ul>
            <li>
                 <NavLink className="seccion_prueba" to="/home">Home</NavLink>
            </li>           
            <li>
                <NavLink className="seccion_2" to="/dashboard">Iniciar sesion</NavLink>
            </li>
            <li>
                <NavLink className="seccion_chamacos" to="/register">Registrarse</NavLink>
            </li>
        </ul>
    </nav>
      
      )
    }   
    
     
   <hr />   
   
   <Outlet />
   
   <footer className="fondob"></footer>
  
  </div>
  
  )
}

export default Layout