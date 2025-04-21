import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessage from "../../../context/useGetMessage.js";
import Loading from "../../../components/Loading.jsx";
import useGetSocketMessage from "../../../context/useGetSocketMessage.js";
// import useConversation from "../../../zustand/useConversation.js";

function Messages() {

  const {loading,messages}=useGetMessage();
  // const { sendingMessage}=useConversation();
  useGetSocketMessage(); // listing incoming messages
  console.log(messages);

// for sms scroll function
  const lastMsgRef=useRef();
  useEffect(()=>{
    setTimeout(()=>{
      if(lastMsgRef.current){
        lastMsgRef.current.scrollIntoView({behavior: "smooth"});
      }
    },100)
  },[messages]);

  // remove for duplicate id

  // const uniqueMessages = messages.filter(
  //   (msg, index, self) => index === self.findIndex((m) => m._id === msg._id)
  // );


  return (
    <div style={{ 
     flex:1,
      overflowY: "auto", 
      minHeight: "calc(92vh - 8vh)", 
      scrollbarWidth: "none", 
      msOverflowStyle: "none" 
    }}>

    {loading?(<Loading/>):(messages.length>0 && messages.map((message,index)=>(

      <div key={message._id || index} ref={lastMsgRef}> 
       <Message  message={message}/>
      </div>
     
    )))}

{/* {sendingMessage && (
        <div className="font-bold text-white  my-2">typing...</div>
      )} */}

    {!loading && messages.length===0 &&(
      <div>
        <p className="text-center mt-[20%]">Say! Hi to start the conversation</p>
        </div>
    )}
     
    </div>
  );
}

export default Messages;
