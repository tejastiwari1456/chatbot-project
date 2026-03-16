import dayjs from 'dayjs';
import { useState } from 'react';
import { Chatbot } from 'supersimpledev';
import './ChatInput.css';

export function ChatInput({chatMessages, setChatMessages}) {
        const [inputText, setInputText] = useState('');

        function saveInputText(event){
          setInputText(event.target.value);
        }

        function sendMessage() {
          const newChatMessages =[
          ...chatMessages,
          {
            message: inputText,
            sender: 'user',
            id: crypto.randomUUID(),
            time : dayjs().valueOf()
          }
         ];

          setChatMessages(newChatMessages);

          setInputText('');

          setTimeout(()=>{
            const response = Chatbot.getResponse(inputText);
          setChatMessages([
            ...newChatMessages,
            {
              message: response,
              sender: 'robot',
              id: crypto.randomUUID(),
              time: dayjs().valueOf()
            }
          ]);
          },800);
        }

        function clearMessages(){
          setChatMessages([]);
        }


        return (
        <div className="chat-input-container">
          <input 
            placeholder="Send a message to Chatbot" 
            size="30"
            onChange={saveInputText}
            onKeyDown={(event)=>{
              if(event.key === 'Enter'){
                sendMessage();
              }
            }}
            value={inputText}
            className="chat-input"
          />
          <button 
          onClick={sendMessage}
          className="send-button"
          >Send</button>
          <button
          onClick={clearMessages}
          className="clear-button"
          >Clear</button>
        </div>
        );
      }