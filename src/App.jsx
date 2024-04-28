import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Default from "./pages/Default";
import Register from './pages/Register';
import MenuPrincipal from './pages/MenuPrincipal';
import Seccion_1 from './pages/Seccion_1';
import PrivateRoute from './router/PrivateRoute';
import Login from './pages/Login';
import Inicio from './pages/Inicio';
import TermsAndCond from './pages/TermsAndCond';
import Mensajeria from './pages/Mensajeria';
//import producto from './pages/producto';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';




function App () {
  
  return (
    
    <div>

      <Helmet>
        <title>Garzalance</title>
        <link rel="icon" type="image/png" href="/img/logo22.png" />
      </Helmet>

      <div className="fondo-title">
       <Link to="/inicio-pantalla-inicial" className="title">
         <div className="logo-container">
            <img className="logo-image" src="/img/logo22.png" />
         </div>Garzalance
       </Link>      
      </div> 

      <Routes>
  <Route path="/" element={<Layout />}> 
    <Route index element={<Inicio />} />    
    <Route path="/registro-usuario" element={<Register />} />
    <Route path="/inicio-pantalla-inicial" element={<Inicio />} />                         
    <Route path="/seccion_1" element={<Seccion_1 />} />    
    <Route path="/terminos-y-condiciones" element={<TermsAndCond />} />          
    <Route path="/login-usuario" element={<Login />} />
    <Route path="/MenuPrincipal" element={<MenuPrincipal />} />
    <Route path="*" element={<Default />} />           
  </Route>
  <Route path="/Mensajeria" element={<Mensajeria />} />
</Routes>           
    </div>
  )
}

export default App