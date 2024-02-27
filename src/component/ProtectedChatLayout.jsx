import React from 'react'
import {Toaster} from "react-hot-toast";
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom';

function ProtectedChatLayout() {
    const globalState=useSelector((state)=>state.auth);
    if(!globalState.authToken){
        return <div>
            You are not authorized to access this page
        </div>
    }

    return (
    <div>
        <Toaster/>
        <Outlet/>
    </div>
  )
}

export default ProtectedChatLayout