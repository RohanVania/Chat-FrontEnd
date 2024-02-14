import {io} from  "socket.io-client"

const url="http://localhost:3112"
const socket=io(url,{
    autoConnect:false
})


//* Catching all Listeners
socket.onAny((event,args)=>{
    // console.log(args);
})





//* Logging Socket
// console.log(socket)

export default socket;