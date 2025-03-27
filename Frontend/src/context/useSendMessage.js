 import React, { useState } from 'react'
 import useConversation from "../zustand/useConversation.js"
 import axios from "axios";
 
 const useSendMessage=()=> {
     const [loading,setLoading]=useState(false);
    const { messages,setMessages,selectedConversation}=useConversation();
    
    const sendMessage=async(message)=>{
        setLoading(true);
        // setSendingMessage(true);
            try{
                const res=await axios.post(
                    `/api/message/send/${selectedConversation._id}`,
                    {message}
                );
                 setMessages([...messages,res.data]);
                // addMessage(res.data);
                //  setSendingMessage(false);
          
               
                setLoading(false);
            }catch(error){
                console.log("Error in send messages",error);
                setLoading(false);
            }
        
       
    };
   return {loading,sendMessage}
 }
 
 export default useSendMessage
 