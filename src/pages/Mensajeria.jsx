//mensajeria
import { useNavigate, useLocation } from 'react-router-dom';
import UserContent from './UserContent';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons/faArrowRotateLeft';
import '../Diseños_css/Mensajeria.css';
import { useState } from 'react';
import io from 'socket.io-client'
import Chat from "./Chat";


const socket = io.connect("http://localhost:3001")

const Mensajeria = () => {
  
  const navigate = useNavigate()
  const location = useLocation()
  const { state } = location

  const onLogout = () => {
    navigate('/login-usuario', {
      replace:true,
    })
  }

  const [username, setUsername] = useState("")
  const [room, setRoom] = useState("")

  const joinRoom = () => {
    if(username !== "" && room !== ""){
      socket.emit("join_room", room)
    }
  }

  return (
    <>
      <UserContent state={state} onLogout={onLogout} />        
      <div className='chat'>
         <h3>unirme al chat</h3>
           <input 
             type='text' 
             placeholder='Leo...' 
             onChange={e => setUsername(e.target.value)} />
            
            <input 
              type='text'
              placeholder='ID de la sala:'
              onChange={e => setRoom(e.target.value)} />

          <button onClick={joinRoom}>Unirme</button>
          <Chat socket={socket} username={username} room={room} />  

      </div>
      
      
    </>
  );
}

export default Mensajeria