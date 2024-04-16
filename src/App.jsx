import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Paginas/Layout';
import Seccion_1 from './Paginas/Seccion_1';
import Home from "./Paginas/Home";
import Default from "./Paginas/Default";
import Dashboard from "./Paginas/Dashboard";
import Product from './Paginas/Product';
import ProductDetails from './Paginas/ProductDetails';

function App () {
  return (
    <div>
      <div className="fondo-title"><h1 className="title">Garzalance</h1></div> 
      <Routes>
            <Route path= "/" element={<Layout />}>
             <Route path="/about" element={<Seccion_1 />} />
             <Route path="/home" element={<Home />} />
             <Route path="/dashboard" element={<Dashboard />} />                  
             <Route path="/products" element={<Product />} > 
               <Route path=":ProductID" element={<ProductDetails />} />
             </Route>             
             <Route path="*" element={<Default />} />           
           </Route>
      </Routes>          
    </div>
  )
}

export default App