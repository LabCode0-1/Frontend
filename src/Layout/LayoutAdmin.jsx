import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutAdmin = () => {
    return (
        <div>
            layout navbar
            <Outlet/>
        </div>
    )
}

export default LayoutAdmin
