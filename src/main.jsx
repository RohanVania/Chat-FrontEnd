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
import HomeLayout from './component/HomeLayout.jsx';
import { Toaster } from 'react-hot-toast';
import ProtectedChatLayout from './component/ProtectedChatLayout.jsx';
import MessengerLayout from './component/MessengerLayout.jsx';
import { QueryClient, QueryClientProvider } from "react-query";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        errorElement: <ErrorPage />
    },
    {
        path: '/messenger/login',
        element: <>
            <Toaster />
            <LoginPage />
        </>
    },
    {
        path: '/messenger/register',
        element:
            <>
                <Toaster />
                <RegisterPage />
            </>
    },
    {
        path: '/messenger/chatapplication',
        element: <ProtectedChatLayout />,
        children: [
            {
                path: "",
                element: <MessengerLayout />
            },
            {

            }
        ]
    }
])





ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={new QueryClient()}>
        <Provider store={store}>
            <RouterProvider router={router}>
                <App />
            </RouterProvider>
        </Provider>
    </QueryClientProvider>
)
