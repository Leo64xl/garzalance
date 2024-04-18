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
                <NavLink className="seccion_2" to="/dashboard">Sign In</NavLink>
            </li>
            <li>
                <NavLink className="seccion_chamacos" to="/register">Sign Up</NavLink>
            </li>
        </ul>
    </nav>
      
      )
    }         
  
   
   <Outlet />
   
   <footer className="fondob">© 2024 Independent Software Developers, Inc. all rights reserved</footer>
  
  </div>
  
  )
}

export default Layout