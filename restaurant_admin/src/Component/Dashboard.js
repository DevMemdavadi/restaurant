import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Dashboard() {
    return (
        <>

            <div className="container-scroller">
                <Header></Header>
                <div className="container-fluid page-body-wrapper">
                    <Sidebar></Sidebar>
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <Outlet></Outlet>
                        </div>
                        <Footer></Footer>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard