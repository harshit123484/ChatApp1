import React, { useEffect } from "react";
import Chatuser from "./Chatuser";
import Messages from "./Messages";
import Typesend from "./Typesend";
import useConversation from "../../../zustand/useConversation.js";
import { CiMenuFries } from "react-icons/ci";
import { useAuth } from "../../../context/AuthProvider.jsx";
function Right() {
  const { selectedConversation,  setselectedConversation } = useConversation();

  useEffect(() => {
    return  setselectedConversation(null)
  }, [ setselectedConversation]);

  return (
    <div className="w-full bg-slate-900 text-gray-300">
   <div>
    {!selectedConversation?(<NoChatSelected/>):(<> 
    
     <Chatuser />
     <div
       style={{
         flex: 1,
         overflowY: "auto",
         maxHeight: "calc(92vh - 8vh)",
         scrollbarWidth: "none",
         msOverflowStyle: "none",
       }} >
       <Messages />
     </div>
     <Typesend />
  
    
    </>
  )}
   </div>
   </div>
  );
}

export default Right;

const NoChatSelected=()=>{
  const [authUser]=useAuth()
  console.log(authUser);
  return (
    <>
    <div className="relative">
    <label htmlFor="my-drawer-2"
    className="btn btn-ghost drawer-button lg:hidden absolute left-5"
    >
     <CiMenuFries  className="text-white text-xl"/> 
    </label>
   
    <div className="flex h-screen items-center justify-center" >
      <h1 className="text-center">
        Welcome <span className="font-semibold text-xl">{authUser.user.fullname}</span>
      <br/>
      No chat selected , please start conversation by selecting anyone to
      your contacts
      </h1>
    </div>
    </div>
    </>
  )
}
