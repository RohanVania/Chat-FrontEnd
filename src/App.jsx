import './App.css'
import LoginPage from './pages/LoginPage';
import socket from "./socket"

function App() {

  // socket.connect();
  function handleSubmit(event) {
    event.preventDefault();
    console.log(socket);
    socket.auth = { username: "Rohan" }
    socket.connect()

  }

  socket.on('connect_error', (err) => {
    if (err.message === "invalid username") {
      setUsernameAlreadySelected(false)
    }
    console.log("Error", err.message);
    console.log(err)
  })


  return (
    <div className=''>
      <LoginPage />
    </div>
  )
}

export default App
