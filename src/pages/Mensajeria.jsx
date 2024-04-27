import React from 'react'
import '../Diseños_css/Mensajeria.css';
import { Outlet } from 'react-router-dom';

const Mensajeria = () => {
  return (
    <div>
    <h1>Interfaz de mensajería</h1>
    {/* Aquí puedes agregar cualquier componente que quieras incluir en todas las páginas de mensajería */}
    <Outlet />
  </div>
  );
}

export default Mensajeria