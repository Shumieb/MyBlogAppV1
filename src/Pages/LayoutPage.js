import React from 'react'
import { Outlet } from "react-router-dom"
import Footer from '../Components/Footer'
import NavBar from "../Components/NavBar"
import Panels from '../Components/Panels'

function LayoutPage() {
    return (
        <div className="Layout">
            <NavBar />
            <div>
                <Outlet />
                <Panels />
            </div>
            <Footer />
        </div>
    )
}

export default LayoutPage