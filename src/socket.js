import {io} from  "socket.io-client"

const url="https://socketserver-ylam.onrender.com"
const socket=io(url,{
    autoConnect:false,
})


//* Catching all Listeners
socket.onAny((event,...args)=>{
    console.log("hello",event)
    console.log("arguments",args);
})

socket.on("hello",(args)=>{
    console.log("This is the message from socket server",args)
})






//* Logging Socket
// console.log(socket)

export default socket;