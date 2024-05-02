//mensajeria
import { useNavigate, useLocation } from 'react-router-dom';
import UserContent from './UserContent';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Diseños_css/Mensajeria.css';
import { useState } from 'react';
import io from 'socket.io-client'
import Chat from './Chat';
import { Container, Divider, Card, CardContent, Icon, FormField, Button, Form } from 'semantic-ui-react'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';





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
  const [showChat, setShowChat] = useState(false)


  const joinRoom = () => {
    if(username !== "" && room !== ""){
      socket.emit("join_room", room);
      setShowChat(true);
    }
  }

  return (

    
     <div>
    
      <UserContent state={state} onLogout={onLogout} />        
      
     <Container>
    {!showChat? (
      <Card fluid>
        <CardContent header='¡Comienza un chat!' />
    <CardContent>
      <Form>
           <FormField>
              <label>Nombre:</label>
              <input 
                type='text' 
                placeholder='Nombre de usuario' 
                onChange={e => setUsername(e.target.value)}  
              />
           </FormField>
        <FormField>
              <label>Sala:</label>
              <input 
                type='text'
                placeholder='ID de la sala:'
               onChange={e => setRoom(e.target.value)} 
              />
        </FormField>
           <Button 
               className='btnJoin'
               onClick={joinRoom}
               type='submit'>
                  Unirme <FontAwesomeIcon icon={faRightToBracket} />
            </Button>
       </Form>
    </CardContent>
        
        <CardContent extra>
        <Icon name="discussions" />Unirme a un chat...
       </CardContent>
     </Card>
     ) : (
    <Chat socket={socket} username={username} room={room} />  
    )}
  </Container>
   
  </div>
      
  
  );
}

export default Mensajeria