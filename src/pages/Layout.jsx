import { Outlet, NavLink } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
    <nav>
        <ul>
            <li>
                <NavLink end to="/home">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
                <NavLink to="/products">Products</NavLink>
            </li>
        </ul>
    </nav>
   <hr />
   
  <Outlet />
 </div>
  )
}

export default Layout