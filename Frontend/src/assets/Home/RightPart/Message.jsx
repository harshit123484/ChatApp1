import React from 'react'

function Message({message}) {
  const authUser=JSON.parse(localStorage.getItem("ChatApp")) || {}; // if authuser give null then {} used nulll sa bachana ka liya
  
 

  const itsMe = authUser.user?._id === message?.senderId; // check the send messsage kiska bheja ha 


 const chatName=itsMe?"chat-end":"chat-start";
 const chatColor = itsMe ?"bg-blue-500" : "";

 const createdAt=new Date(message.createdAt)
 const formattedTime=createdAt.toLocaleTimeString([],{
  hour:'2-digit',
  minute:'2-digit'
 })

  return (
    <div>
       <div className="p-4">
        <div className={`chat ${chatName}`} >
          <div className={`chat-bubble text-white ${chatColor}`}>
            {message.message }</div> 
            <div className='chat-footer'>
        {formattedTime}
       </div> 
        </div>
      
      </div>
    </div>
  )
}

export default Message;
