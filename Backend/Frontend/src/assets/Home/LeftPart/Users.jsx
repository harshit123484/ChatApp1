import React from "react";
import User from "./User";
import UserGetAllUsers from "../../../context/userGetAllUsers";

function Users() {
  const [allUsers,loading]=UserGetAllUsers();
  console.log(allUsers);  
  return (
    <div>
      <h1 className="px-8 py-2 text-white font-semibold bg-slate-800 rounded-md">
        Messages
      </h1>

      <div
        style={{
          flex: 1,
          overflowY: "auto",
          maxHeight: "calc(84vh - 10vh)",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
       {allUsers.map((user,index)=>(
        <User key={index} user={user}/>
       ))}

      </div>
    </div>
  );
}

export default Users;
