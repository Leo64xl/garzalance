import { useNavigate, useLocation } from 'react-router-dom';
import UserContent from './UserContent';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons/faArrowRotateLeft';
import '../Diseños_css/Mensajeria.css';

const Mensajeria = () => {
  
  const navigate = useNavigate()
  const location = useLocation()
  const { state } = location

  const onLogout = () => {
    navigate('/login-usuario', {
      replace:true,
    })
  }

  return (
    <div>
      <UserContent state={state} onLogout={onLogout} />        
      <p>hola devs</p>
      
      
    </div>
  );
}

export default Mensajeria