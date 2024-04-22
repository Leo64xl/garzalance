import { Outlet, NavLink, useLocation, useNavigate } from 'react-router-dom'

const Layout = () => {

  const {state} = useLocation();
  const navigate = useNavigate()

  console.log(state)

  const onLogout = () => {
    navigate('/login-usuario', {
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
                 <NavLink className="seccion_prueba" to="/inicio-pantalla-inicial">INICIO</NavLink>
            </li>           
            <li>
                <NavLink className="seccion_2" to="/login-usuario">INICIAR SESION</NavLink>
            </li>
            <li>
                <NavLink className="seccion_chamacos" to="/registro-usuario">REGISTRARSE</NavLink>
            </li>
        </ul>
    </nav>
      
      )
    }         
  
   
  <Outlet />
   
   <footer className="fondob">© 2024 Independent Software Developers, Inc. All rights reserved.</footer>
  
 </div>
  
  )
}

export default Layout