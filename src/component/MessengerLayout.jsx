import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";

function MessengerLayout() {
    const [sidebarVisibility, setSideBarVisibility] = useState(false)
    return (
        <div className='flex'>
            <div className='absolute left-0 top-0 w-[320px] bg-red-300'>
                <p>SideBar</p>
                <p>SideBar</p>
                <p>SideBar</p>
                <p>SideBar</p>
                <p>SideBar</p>
                <p>SideBar</p>
                <p>SideBar</p>
                <p>SideBar</p>
                <p>SideBar</p>
                <p>SideBar</p>
                <p>SideBar</p>
                <p>SideBar</p>
                <p>SideBar</p>
                <p>SideBar</p>
                <p>SideBar</p>
                <p>SideBar</p>
                <p>SideBar</p>
                <p>SideBar</p>
                <p>SideBar</p>
                <p>SideBar</p>
                <p>SideBar</p>
                <p>SideBar</p>
                <p>SideBar</p>
                <p>SideBar</p>
                <p>SideBar</p>
                <p>SideBar</p>
                <p>SideBar</p>
                <p>SideBar</p>
                <p>SideBar</p>
                <p>SideBar</p>
                <p>SideBar</p>


            </div>
            <div className='ml-[320px]'>Content bar</div>
        </div>
    )
}

export default MessengerLayout