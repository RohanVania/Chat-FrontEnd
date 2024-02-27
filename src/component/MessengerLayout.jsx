import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { RiMenu3Fill } from "react-icons/ri";
import { motion } from "framer-motion"
import ActiveFriend from './ActiveFriend';
import Friend from './Friend';

function MessengerLayout() {
    const [sidebarVisibility, setSideBarVisibility] = useState(false)

    const framerSideBarPanel = {
        initial: { x: '-100%' },
        animate: { x: 0 },
        exit: { x: '-100%' },
        transition: { duration: 0.3 }
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
                            {Array.from({ length: 1 }).map((element, indx) => {
                                return <Friend key={indx} />
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

                <div id='chat-header' className='bg-pink-40 border-b-red-100 border-b-[1px] h-[72px] px-4 pt-2 text-[29px] '>
                    Jurong Doctor
                </div>

                <div id='chat-body' className='pt-[50px] pb-[100px] flex flex-col gap-y-4  px-5 max-h-[92.7vh]  overflow-y-auto '>
                    {Array.from({ length: 2 }).map((el, indx) => {
                        return <>
                            <div className='flex justify-end gap-x-3   '>
                                <p className='bg-[#1976d2] px-5 py-4 rounded-xl flex items-center relative text-white max-w-[45%]'>Hello, how are you Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam velit sint beatae id officia odio iste ad. Similique inventore obcaecati dignissimos in perferendis, exercitationem et id alias, neque sapiente dicta iusto iste beatae repellat distinctio a officiis illum ipsam laborum?
                                    <div className='w-[20px] aspect-square absolute right-[-3px] top-[15px]  bg-[#1976d2] rotate-45' />
                                </p>
                                <div className='w-[40px] aspect-square self-start  justify-center'>
                                    <img className='w-full h-full object-cover rounded-full' src='https://images.unsplash.com/photo-1655918061635-c7537f8b5239?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJvbmFsZG98ZW58MHx8MHx8fDA%3D' />
                                </div>
                                    
                            </div>

                            <div className='flex justify-start gap-x-3   '>
                                <div className='w-[40px] aspect-square self-start  justify-center'>
                                    <img className='w-full h-full object-cover rounded-full' src='https://images.unsplash.com/photo-1655918061635-c7537f8b5239?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJvbmFsZG98ZW58MHx8MHx8fDA%3D' />
                                </div>
                                <p className='bg-[#1976d2] px-5 py-4 rounded-xl flex items-center relative text-white max-w-[45%]'>Hello, how are you Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam velit sint beatae id officia odio iste ad. Similique inventore obcaecati dignissimos in perferendis, exercitationem et id alias, neque sapiente dicta iusto iste beatae repellat distinctio a officiis illum ipsam laborum?
                                    <div className='w-[20px] aspect-square absolute left-[-3px] top-[15px]  bg-[#1976d2] rotate-45' />
                                </p>
                            </div>
                        </>
                    })

                    }
                </div>

                <div id='chat-bar' className='flex gap-x-3 w-full bg-pink-20 py-4  absolute bottom-[1px] px-6 bg-[#FFFFFF] z-20 '>
                    <input type='text' className='w-ful px-5 py-3 w-full rounded-[40px] outline-none bg-[#f7f4f2]' placeholder='Enter Text' />
                    <button className='px-6  text-white bg-blue-500 rounded-xl'>Send</button>
                </div>

            </div>

        </div>
    )
}

export default MessengerLayout