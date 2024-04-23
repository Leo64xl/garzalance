import { Outlet, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons/faUserPlus';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

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
            <li className='seccion_1'>
                 <NavLink className="seccion_prueba" to="/inicio-pantalla-inicial">
                  <FontAwesomeIcon className="nav-icon" icon={faHouse} />Inicio
                 </NavLink>
            </li>     
            <li>
                <NavLink className="seccion_2" to="/login-usuario">
                 <FontAwesomeIcon className="nav-icon2" icon={faArrowRightToBracket} /> Iniciar sesion</NavLink>
            </li>
            <li>
                <NavLink className="seccion_chamacos" to="/registro-usuario">
                <FontAwesomeIcon className="nav-icon3" icon={faUserPlus} />Registrarse</NavLink>
            </li>
        </ul>
    </nav>
      
      )
    }         
  
   
  <Outlet />
   
   <footer>
    <Link to="/terminos-y-condiciones" 
       className="fondob">© 2024 Independent Software Developers, Inc. All rights reserved.
    </Link>
   </footer>
  
 </div>
  
  )
}

export default Layout