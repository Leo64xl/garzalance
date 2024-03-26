import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <nav>
        <ul>            
            <li>
                <NavLink to="/products/1">Products 1</NavLink>
            </li>
            <li>
                <NavLink to="/products/2">Products 2</NavLink>
            </li>
            <li>
                <NavLink to="/products/3">Products 3</NavLink>
            </li>
        </ul>
        <Outlet/>
    </nav>
  )
}

export default Product