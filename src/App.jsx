import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from "./pages/Home";
import Default from "./pages/Default";
import Dashboard from "./pages/Dashboard";
import Register from './pages/Register';


function App () {
  return (
    <div>
      <div className="fondo-title"><h1 className="title">Garzalance</h1></div> 
      <Routes>
            <Route path= "/" element={<Layout />}> 
             <Route index element={<Home />} />           
             <Route path="/register" element={<Register />} />
             <Route path="/home" element={<Home />} />
             <Route path="/dashboard" element={<Dashboard />} />                               
             <Route path="*" element={<Default />} />           
           </Route>
      </Routes>          
    </div>
  )
}

export default App