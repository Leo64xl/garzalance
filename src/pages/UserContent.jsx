// UserContent.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons/faArrowRotateLeft';

const UserContent = ({ state, onLogout }) => (
  <div className="user">
    <p className="welcomeb">¡Bienvenido!</p>          
    <span className="username"> {state?.email} </span>  
    <NavLink to="/Mensajeria">
      <FontAwesomeIcon className="nav-icon5" icon={faCommentDots} />
    </NavLink>   
    
    <button className="btn-logout" onClick={onLogout}>
      Cerrar sesión
      <FontAwesomeIcon className="nav-icon4" icon={faRightFromBracket} />
    </button>         
  </div>
);

export default UserContent;