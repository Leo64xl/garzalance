import { Outlet, NavLink } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="secciones_nav">
    <nav>
        <ul>
            <li>
                <NavLink end to="/home">Seccion de prueba</NavLink>
            </li>
            <li>
                <NavLink to="/about">Seccion 1</NavLink>
            </li>
            <li>
                <NavLink to="/dashboard">Seccion 2</NavLink>
            </li>
            <li>
                <NavLink to="/products">Chamacos</NavLink>
            </li>
        </ul>
    </nav>
   <hr />
   
  <Outlet />
 </div>
  )
}

export default Layout