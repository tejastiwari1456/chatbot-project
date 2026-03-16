import { useEffect, useState } from 'react';
import { ChatInput } from './components/ChatInput.jsx';
import { ChatMessages } from './components/ChatMessages.jsx';
import { Chatbot } from 'supersimpledev';
import './App.css';

function App(){
        // const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages'))|| [{
        //   message: 'hello chatbot',
        //   sender: 'user',
        //   id: 'id1',
        // },[]]);

        // useEffect(()=>{
        //   localStorage.setItem('messages',JSON.stringify(chatMessages));
        // },[chatMessages]);
        const [chatMessages, setChatMessages] = useState([]);


        const [darkMode,setDarkMode] = useState(false);

        function toggleTheme(){
          setDarkMode(!darkMode);
        }

        // const [chatMessages, setChatMessages] = array;
        // const chatMessages = array[0];
        // const setChatMessages = array[1];

        useEffect(()=>{
          Chatbot.addResponses({
            'goodbye': 'Goodbye. Have a great day!',
            'give me a unique id': function(){
              return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;
            },
            'your name ?': 'My Name is Heisenberg, Bitchh!!',
            'Who made you?':`I was created by Mr.Tejas Tiwari`,
            'Tell me a joke': `Why do Java developers wear glasses?`,
            'Why' : `Because they don't C#.`,
            'you are too funny' : 'I know Bitchh!!',
            'time': function(){
              return `The Current time is: ${new Date().toLocaleTimeString()}`
                }
            });
          },[]);

        return (
          <div className={darkMode ? "app-container dark":"app-container"}>
            <button onClick={toggleTheme} className="theme-button">
              {darkMode ? "Light Mode": "Dark Mode"}
            </button>

            <ChatMessages 
            chatMessages = {chatMessages}
            />
            {chatMessages.length === 0 && (
            <div className="welcome-text">
              Welcome to the chatbot project! Send a message using the textbox above.
            </div>
          )}
            <ChatInput 
              chatMessages = {chatMessages}
              setChatMessages = {setChatMessages}
            />
          </div>
        )
      }

export default App
