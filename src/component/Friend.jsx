import React from 'react'
import { useDispatch } from 'react-redux'
import {setCurrentChatUser} from "../slices/ChatUser"

function Friend({element}) {
    const dispatch=useDispatch();

    function changeCurrentChatUser(){
        dispatch(setCurrentChatUser(element))
    }

    return (
        <li className='px-5 py-4 flex items-center justify-between cursor-pointer hover:bg-[#b0c77a]' onClick={changeCurrentChatUser}>
            <div className='flex items-center gap-x-2'>
                <div className='w-[50px] aspect-square '>
                    <img className='w-full h-full  rounded-full' src={`${element?.profilePicture}`} />
                </div>
                <p>{element?.username}</p>
            </div>
            <div className='bg-red-300 px-3 py-1 rounded-[100%]'>1</div>
        </li>
    )
}

export default Friend