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



function App () {
  return (
    <div>
      <div className="fondo-title"><h1 className="title">Garzalance</h1></div> 
      <Routes>
            <Route path= "/" element={<Layout />}> 
             <Route index element={<Inicio />} />    
             <Route path="/registro-usuario" element={<Register />} />
             <Route path="/inicio-pantalla-inicial" element={<Inicio />} />                         
              <Route path="/seccion_1" element={<Seccion_1 />} />    
              <Route path="/terminos-y-condiciones" element={<TermsAndCond />} />          
              <Route path="/login-usuario" element={<Login />} />
              <Route 
              path="/MenuPrincipal" 
              element={
                <PrivateRoute>
                   <MenuPrincipal />
                </PrivateRoute>
              } 
              />
             <Route path="*" element={<Default />} />           
           </Route>
      </Routes>          
    </div>
  )
}

export default App