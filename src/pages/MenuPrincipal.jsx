import React from 'react'
import '../Diseños_css/MenuPrincipal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';

const MenuPrincipal = () => {
  return (
    <div>
     <div> MenuPrincipal</div> 
        {<FontAwesomeIcon icon={ faArrowRight } className='arrow-icon'/>}    
    </div>
  )
}

export default MenuPrincipal