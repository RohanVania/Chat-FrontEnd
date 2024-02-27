import React from 'react'
import socket from "../socket"


function HomeLayout() {

    function handleSubmit(event) {
        event.preventDefault();
        console.log(socket);
        socket.auth = { username: "Rohan" }
        socket.connect()
    }

    return (
       <div>
            Home Page
            <br />
            <a href='/messenger/login'>Go to Login</a>
            <br />
            <a href='/messenger/register'>Go to Register</a>
            <br />

            <form onSubmit={handleSubmit}>
                <input type='text' className='bg-red-300 m-2 p-1 ' />
                <button className='bg-blue-300 px-2 py-1'>Submit</button>
                <p>Client Connection to socket server test</p>
            </form>
        </div>
    )
}

export default HomeLayout