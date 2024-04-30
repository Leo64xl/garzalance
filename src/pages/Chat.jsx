//Chat 
import React from 'react'
import '../Diseños_css/Chat.css';
import { useState, useEffect } from 'react';
import { Container, Divider, Card, CardContent, Icon, FormField, Button, Form, Input } from 'semantic-ui-react'


const Chat = ({socket, username, room}) => {

    const [currentMessage, setCurrentMessage] = useState("")
    
    const sendMessage = async () => {
        if(username && currentMessage) {
            const info = {
                message: currentMessage,
                room,
                author: username,
                time: new Date(Date.now()).getHours()+":"
                +new Date().getMinutes(),
            };

            await socket.emit("send_message", info)
        }
    }

    useEffect(() => {
        socket.on("receive_message", (data) => {
            console.log(data)
        })
    }, [socket])

  return (
    
    <Container>
      <Card fluid>
       <CardContent header='Chat en vivo' />
       <CardContent >Mensajes</CardContent>
       <CardContent extra>
         <Form>
             <FormField>
               <div class="ui action input">
                <Input
                    type='text' 
                    placeholder='Mensaje...'
                    onChange={e => setCurrentMessage(e.target.value)}
                />
                 <button 
                   className="btnEnv"
                   onClick={sendMessage}>Enviar &#9658;
                 </button>
                </div>
             </FormField>
          </Form>
         <Icon name='user' />4 Friends
       </CardContent>
     </Card>    
    </Container>
  )
}

export default Chat