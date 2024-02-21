import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { store } from "./store.jsx";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import ErrorPage from './pages/ErrorPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from "./pages/RegisterPage.jsx"
import socket from "./socket"


const router = createBrowserRouter([
    {
        path: '/',
        element: <div>
            Home Page
            <br />
            <a href='/messenger/login'>Go to Login</a>
            <br />
            <a href='/messenger/register'>Go to Register</a>
            <br/>
            <form onSubmit={handleSubmit}>
                <input type='text' className='bg-red-300 m-2 p-1 '/>
                <button className='bg-blue-300 px-2 py-1'>Submit</button>
                <p>Client Connection to socket server test</p>
            </form>
        </div>,
        errorElement: <ErrorPage />
    },
    {
        path: '/messenger/login',
        element: <LoginPage />
    },
    {
        path: '/messenger/register',
        element: <RegisterPage />
    }
])

function handleSubmit(event) {
    event.preventDefault();
    console.log(socket);
    socket.auth = { username: "Rohan" }
    socket.connect()

  }


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
    </Provider>
)
