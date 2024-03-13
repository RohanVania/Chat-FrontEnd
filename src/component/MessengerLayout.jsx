import React, { useRef, useState, useEffect } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { CiCirclePlus } from "react-icons/ci";
import { RiMenu3Fill } from "react-icons/ri";
import { motion } from "framer-motion"
import ActiveFriend from './ActiveFriend';
import Friend from './Friend';
import Message from './Message';
import { getAllUsers } from "../operation/fetchAllUsers"
import { useDispatch, useSelector } from 'react-redux';
import socket from '../socket';
import { savemessage } from '../actions/messageActions';
import { useQuery } from 'react-query';
import { setMessageSendSuccess } from '../slices/ChatUser';


function MessengerLayout() {
    console.log("Rendering")
    const dispatch = useDispatch();
    const globalStateDoctorsState = useSelector((state) => state.doctors);
    const globalStateAuthState = useSelector((state) => state.auth);
    const globalStateChatUserState = useSelector((state) => state.chatUser);
    const messageRef=useRef(null);



    // let Messagearray = globalStateChatUserState.messages.length !== 0 ? globalStateChatUserState.messages : [];

    const [sidebarVisibility, setSideBarVisibility] = useState(false)
    const inputRef = useRef("")


    const { data } = useQuery('getAllUsers', () => { getAllUsers(globalStateAuthState.authDetail.role, dispatch) }, { staleTime: 'Infinity' })


    async function handleInputSubmit(event) {
        event.preventDefault();
        const inputValue = inputRef.current.value
        
        const dataToSend = {
            message: inputValue,
            senderName: globalStateAuthState?.authDetail?.username,
            senderId: globalStateAuthState?.authDetail?.id,
            receiverId: globalStateChatUserState?.currentChatUser?.id,
            receiverEmail: globalStateChatUserState?.currentChatUser?.email,
            receiverName: globalStateChatUserState?.currentChatUser?.username,
        }

        const result = await savemessage(dataToSend, dispatch)

        if (result.status === 200 && result.data.status === "Success") {
            socket.emit('sendMessage', result.data.data);
        }

        inputRef.current.value = "";
    }

    function handleInputChange(event) {
        inputRef.current.value = event.target.value;
    }

    useEffect(()=>{
        socket.on('getMessage', (data) => {
            console.log("Message from server", data)
            dispatch(setMessageSendSuccess(data))
    
        })
        return ()=>{
            socket.off('getMessage')
        }
    })

    // useEffect(()=>{
    //     if(messageRef){
    //         messageRef.current?.addEventListener('DOMNodeInserted',event=>{
    //             const {currentTarget:target}=event;
    //             target.scroll({top:target.scrollHeight})
    //         })
    //     }
    // })



    return (
        <div id='chat-page' className='flex min-h-[100vh]'>

            {!sidebarVisibility ?
                <motion.div id='sidebar' className='bg-[#F7F4F2] w-[320px] max-h-[100vh] sticky top-0 bottom-0 overflow-y-auto custom-scrollbar'>

                    <div className='flex justify-between bg-blue-200 py-5 px-5 items-center '>
                        <p className='text-[21px]'>Current User</p>
                        <button className='text-[25px] font-light' onClick={() => { setSideBarVisibility(true) }}>
                            <RiMenu3Fill />
                        </button>
                    </div>

                    <div id='search-bar' className=' px-5 py-3 '>
                        <input type='text' className='w-full py-2 px-4  outline-none  rounded-3xl' placeholder='Search ' />
                    </div>

                    {/* <div id='active-users' className='bg-blue-800 py-3 px- w-full overflow-x-auto  whitespace-nowrap'>
                        {
                            Array.from({ length: 5 }).map((element, index) => {
                                return <ActiveFriend key={index} />
                            })
                        }
                    </div> */}

                    <div id='listofusers' className=' '>
                        <ul>
                            {globalStateDoctorsState.doctorList?.map((element, indx) => {
                                let activeElement = element.id === globalStateChatUserState?.currentChatUser?.id ? true : false
                                return <Friend key={indx} element={element} activeElement={activeElement} />
                            })}


                        </ul>
                    </div>

                </motion.div> :
                <div id='sidebar' className='bg-[#F7F4F2] px-2 py-2'>
                    <button className='bg-blue-40 p-1' onClick={() => setSideBarVisibility(false)}>
                        <AiOutlineMenu className='text-[23px] text-black' />
                    </button>
                </div>
            }

            <div id='chat-box' className='bg-[#FFFFFF] flex-1  relative max-h-[100vh] overflow-y-aut ' >
                {globalStateChatUserState?.currentChatUser ?
                    <>
                        <div id='chat-header' className='bg-pink-40 border-b-red-100 border-b-[1px] h-[72px] px-4 pt-2 text-[29px] '>
                            {
                                globalStateChatUserState.currentChatUser?.username
                            }
                        </div>

                        <div id='chat-body' className='pt-[50px] pb-[100px] flex flex-col gap-y-4  px-5 max-h-[91.7vh]  overflow-y-auto ' ref={messageRef}>
                            {
                                globalStateChatUserState?.messages?.length !== 0 && globalStateChatUserState?.messages?.map((el, indx) => {
                                    return el.senderId === globalStateAuthState.authDetail.id ? <Message key={indx} sender={true} element={el} /> : <Message key={indx} element={el} />
                                }
                                )
                            }
                            {
                                globalStateChatUserState?.messages?.length === 0 && <h1>There is no chat conversation between them</h1>
                            }
                        </div>

                        <div id='chat-bar' >
                            <form onSubmit={handleInputSubmit} className='flex gap-x-3 w-full bg-pink-20 py-4  absolute bottom-[2px] px-6 bg-[#FFFFFF] z-20 '>
                                <input type='text' ref={inputRef} className='w-ful px-5 py-3 w-full rounded-[40px] outline-none bg-[#f7f4f2]' placeholder='Enter Text' onChange={handleInputChange} />
                                <button className='px-6  text-white bg-blue-500 rounded-xl' onClick={handleInputSubmit}>Send</button>
                            </form>
                        </div>
                    </>
                    :
                    <h1 className='bg-pink-40 border-b-red-100 border-b-[1px] h-[72px] px-4 pt-2 text-[29px] font-normal uppercase text-[#9bb068] flex gap-x-5 items-center cursor-pointer'> <CiCirclePlus /> Select a User to chat</h1>
                }
            </div>


        </div>
    )
}

export default MessengerLayout


