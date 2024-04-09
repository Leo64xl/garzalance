import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <nav>
        <ul>            
            <li>
                <NavLink to="/products/100%">Marco</NavLink>
            </li>
            <li>
                <NavLink to="/products/100.1%">Luis</NavLink>
            </li>
            <li>
                <NavLink to="/products/100.2%">Vladi</NavLink>
            </li>
        </ul>
        <Outlet/>
    </nav>
  )
}

export default Product