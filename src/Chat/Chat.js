import React, { useEffect, useState } from 'react';
import './Chat.css';
import ChatHeader from './ChatHeader/ChatHeader';
import Message from './Message/Message';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { selectChannelId, selectChannelName } from '../features/appSlice';
import db from '../firebase/firebase';
import firebase from 'firebase';
import ChatInput from './ChatInput/ChatInput';

function Chat() {
    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    useEffect(()=> {
        
        if(channelId){
            db.collection('channels')
            .doc(channelId)
            .collection('messages')
            .orderBy('timestamp', 'asc')
            .onSnapshot((snapshot) => 
            
            setMessages(snapshot.docs.map((doc) => doc.data()))
            );
        }
      
    },[channelId]);

    const sendMessage = e => {
        e.preventDefault();

        db.collection("channels").doc(channelId).collection("messages")
        .add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message:input,
            user: user,

        });
         setInput("");
    }
    
       
      
      
      
        // return <div ref={divRef} />;
     
    return(
        <div
        className="chat">
            
            <div className="chat_header">
            <ChatHeader  channelName={channelName} />

            </div>
            <div className="chat__messages">
                {messages.map((message) => (
                    <Message 
                    timestamp={message.timestamp}
                    message={message.message}
                    user={message.user}
                    />
                ))}
            </div>
            <ChatInput input={input} channelId={channelId} setInput={setInput} channelName={channelName} sendMessage={sendMessage} />
        </div>)
}

export default Chat;
