import { Outlet, NavLink } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="secciones_nav">
    <nav>
        <ul>
            <li>
                <NavLink className="seccion_prueba" end to="/home">Seccion de prueba</NavLink>
            </li>
            <li>
                <NavLink className="seccion_1" to="/about">Seccion 1</NavLink>
            </li>
            <li>
                <NavLink className="seccion_2" to="/dashboard">Seccion 2</NavLink>
            </li>
            <li>
                <NavLink className="seccion_chamacos" to="/products">Chamacos</NavLink>
            </li>
        </ul>
    </nav>
   <hr />
   
  <Outlet />
 </div>
  )
}

export default Layout