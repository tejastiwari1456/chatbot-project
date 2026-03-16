import dayjs from 'dayjs';
import RobotProfileImage from '../assets/chatbot_image.avif';
import UserProfileImage from '../assets/mypic.jpeg';
import './ChatMessage.css';


export function ChatMessage({message, sender, time}){
        // const message = props.message;
        // const sender = props.sender;
        // const {message, sender} = props;

        /*
        if(sender === 'robot'){
          return(
            <div>
              <img src="chatbot_image.avif" width="50"/>
              {message}
          </div>
          );
        }
        */

        return (
            <div className={
              sender==='user'
                ? 'chat-message-user'
                :'chat-message-robot'
              }>
                { sender === 'robot' && (
                  <img src= {RobotProfileImage} className="chat-message-profile"/>
                )}
                <div className="chat-message-text">
                  {message}
                  {time && (
                    <div className='chat-message-time'>
                      {dayjs(time).format('h:mma')}
                    </div>
                  )}
                </div>
                {sender === 'user' && (
                  <img src= {UserProfileImage} className="chat-message-profile"/>
                )}
            </div>
          );
        }