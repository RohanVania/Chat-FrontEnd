import React from 'react'

function Message({ sender }) {
    return (
        <>
            {
                sender ?
                        <div className='flex  justify-end gap-x-3 '>
                            <p className='bg-[#b0c77a] px-5 py-4 rounded-xl flex items-center relative text-white max-w-[45%] '>Hello, how are you Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam velit sint beatae id officia odio iste ad. Similique inventore obcaecati dignissimos in perferendis, exercitationem et id alias, neque sapiente dicta iusto iste beatae repellat distinctio a officiis illum ipsam laborum?
                                <div className='w-[20px] aspect-square absolute right-[-3px] top-[15px]  bg-[#b0c77a] rotate-45' />
                            </p>
                            <div className='w-[40px] aspect-square self-start  justify-center'>
                                <img className='w-full h-full object-cover rounded-full' src='https://images.unsplash.com/photo-1655918061635-c7537f8b5239?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJvbmFsZG98ZW58MHx8MHx8fDA%3D' />
                            </div>
                        </div>

                    : <div className='flex justify-start gap-x-3   '>
                        <div className='w-[40px] aspect-square self-start  justify-center'>
                            <img className='w-full h-full object-cover rounded-full' src='https://images.unsplash.com/photo-1655918061635-c7537f8b5239?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJvbmFsZG98ZW58MHx8MHx8fDA%3D' />
                        </div>
                        <p className='bg-[#b0c77a]  px-5 py-4 rounded-xl flex items-center relative text-white max-w-[45%]'>Hello, how are you Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam velit sint beatae id officia odio iste ad. Similique inventore obcaecati dignissimos in perferendis, exercitationem et id alias, neque sapiente dicta iusto iste beatae repellat distinctio a officiis illum ipsam laborum?
                            <div className='w-[20px] aspect-square absolute left-[-3px] top-[15px]  bg-[#b0c77a]  rotate-45' />
                        </p>
                    </div>
            }
        </>
    )
}

export default Message