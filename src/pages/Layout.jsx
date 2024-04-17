import { Outlet, NavLink } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="secciones_nav">
    <nav>
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
     
   <hr />   
   
   <Outlet />
   
 <footer className="fondob"></footer>
  
  </div>
  
  )
}

export default Layout