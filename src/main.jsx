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

const router = createBrowserRouter([
    {
        path: '/',
        element: <div>
            Home Page
            <br />
            <a href='/messenger/login'>Go to Login</a>
            <br />
            <a href='/messenger/register'>Go to Register</a>

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


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
    </Provider>
)
