import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentChatUser,setMessages } from "../slices/ChatUser"
import { getMessageForEachUsers } from '../operation/fetchAllUsers';

function Friend({ element,activeElement }) {
    const dispatch = useDispatch();
    const globalState = useSelector((state) => state.chatUser);


    async function changeCurrentChatUser() {
        // dispatch(setCurrentChatUser(element))
        await getMessageForEachUsers(element,dispatch);
        localStorage.setItem('currentChatUser', JSON.stringify(element))
        // console.log(globalState.currentChatUser?.id);
       
    }



    return (

        activeElement ? <li className={`px-5 py-4 flex items-center justify-between cursor-pointer bg-[rgba(176,199,122,0.3)] `} onClick={changeCurrentChatUser}>
            <div className='flex items-center gap-x-2'>
                <div className='w-[50px] aspect-square '>
                    <img className='w-full h-full  rounded-full' src={`${element?.profilePicture}`} />
                </div>
                <p>{element?.username}</p>
            </div>
            <div className='bg-red-300 px-3 py-1 rounded-[100%]'>1</div>
        </li>
            :
            <li className={`px-5 py-4 flex items-center justify-between cursor-pointer hover:bg-[#b0c77a] `} onClick={changeCurrentChatUser}>
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