
import React from 'react'

function ActiveFriend() {
    return (
        <div className='w-[60px] aspect-square bg-pink-30 inline-block mx-1 relative'>
            <img className='w-full rounded-full h-full object-cover' src='https://images.unsplash.com/photo-1554151228-14d9def656e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww' />
            <div className='bg-green-400 w-[15px] aspect-square rounded-full absolute top-[46px] right-[2px] ' />
        </div>
    )
}

export default ActiveFriend