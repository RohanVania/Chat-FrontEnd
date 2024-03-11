import React from 'react'
import { useSelector } from 'react-redux'

function Message({ sender,element }) {

   const globalAuthState= useSelector((state)=>state.auth);
   const globalChatUserState=useSelector((state)=>state.chatUser);
   
    return (
        <>
            {
                sender ?
                        <div className='flex  justify-end gap-x-3 '>
                            <p className='bg-[#b0c77a] px-5 py-4 rounded-xl flex items-center relative text-white max-w-[45%] '>{element.message}
                                <div className='w-[20px] aspect-square absolute right-[-3px] top-[15px]  bg-[#b0c77a] rotate-45' />
                            </p>
                            <div className='w-[40px] aspect-square self-start  justify-center'>
                                <img className='w-full h-full object-cover rounded-full' src={`${globalAuthState.authDetail?.profilePicture}`} />
                            </div>
                        </div>
                    : 
                    <div className='flex justify-start gap-x-3   '>
                        <div className='w-[40px] aspect-square self-start  justify-center'>
                            <img className='w-full h-full object-cover rounded-full' src={`${globalChatUserState.currentChatUser?.profilePicture}`} />
                        </div>
                        <p className='bg-[#b0c77a]  px-5 py-4 rounded-xl flex items-center relative text-white max-w-[45%]'>{element.message}
                            <div className='w-[20px] aspect-square absolute left-[-3px] top-[15px]  bg-[#b0c77a]  rotate-45' />
                        </p>
                    </div>
            }
        </>
    )
}

export default Message