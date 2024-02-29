import React, { useRef, useState,useEffect } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { CiCirclePlus } from "react-icons/ci";
import { RiMenu3Fill } from "react-icons/ri";
import { motion } from "framer-motion"
import ActiveFriend from './ActiveFriend';
import Friend from './Friend';
import Message from './Message';
import {getAllUsers} from "../operation/fetchAllUsers"
import { useDispatch, useSelector } from 'react-redux';


function MessengerLayout() {
    const dispatch=useDispatch();
    const globalState=useSelector((state)=>state)

    const [sidebarVisibility, setSideBarVisibility] = useState(false)
    const inputRef = useRef("")

    useEffect(  async ()=>{
        const result=await getAllUsers(dispatch);
        console.log(result);
    },[])



    function handleInputSubmit(event) {
        event.preventDefault();
        const inputValue = inputRef.current.value
        console.log("Input Data", inputValue)
        inputRef.current.value = "";

    }

    function handleInputChange(event) {
        inputRef.current.value = event.target.value;
    }

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

                    <div id='search-bar' className=' px-5 py-3'>
                        <input type='text' className='w-full py-2 px-4  outline-none  rounded-3xl' placeholder='Search ' />
                    </div>

                    <div id='active-users' className='bg-blue-800 py-3 px- w-full overflow-x-auto  whitespace-nowrap'>
                        {
                            Array.from({ length: 5 }).map((element, index) => {
                                return <ActiveFriend key={index} />
                            })
                        }
                    </div>

                    <div id='listofusers' className=' '>
                        <ul>
                            {globalState.doctors.doctorList.map((element, indx) => {
                                return <Friend key={indx} element={element} />
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

            <div id='chat-box' className='bg-[#FFFFFF] flex-1  relative max-h-[100vh] overflow-y-auto'>

                {globalState.chatUser.currentChatUser ?
                    <>
                        <div id='chat-header' className='bg-pink-40 border-b-red-100 border-b-[1px] h-[72px] px-4 pt-2 text-[29px] '>
                            {globalState.chatUser.currentChatUser.username}
                        </div>

                        <div id='chat-body' className='pt-[50px] pb-[100px] flex flex-col gap-y-4  px-5 max-h-[92.7vh]  overflow-y-auto '>
                            {Array.from({ length: 3 }).map((el, indx) => {
                                return indx === 0 || indx % 2 === 0 ? <Message sender={true} /> : <Message />
                            })

                            }
                        </div>

                        <div id='chat-bar' >
                            <form onSubmit={handleInputSubmit} className='flex gap-x-3 w-full bg-pink-20 py-4  absolute bottom-[1px] px-6 bg-[#FFFFFF] z-20 '>
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