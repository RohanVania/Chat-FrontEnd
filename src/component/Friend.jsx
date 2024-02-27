import React from 'react'

function Friend() {
    return (
        <li className='px-5 py-4 flex items-center justify-between cursor-pointer '>
            <div className='flex items-center gap-x-2'>
                <div className='w-[50px] aspect-square '>
                    <img className='w-full h-full  rounded-full' src="https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" />
                </div>
                <p>Rohan Vania </p>
            </div>
            <div className='bg-red-300 px-3 py-1 rounded-[100%]'>1</div>
        </li>
    )
}

export default Friend