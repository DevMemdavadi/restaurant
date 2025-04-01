import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header() {

    const nav = useNavigate()

    const logout = () => {
        window.sessionStorage.clear()
        nav("/")
    }

    return (
        <>
            <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
                    <a className="navbar-brand brand-logo"><img src="http://tasty.000.pe/admin/images/logo.svg" alt="logo" /></a>
                    <a className="navbar-brand brand-logo-mini"><img src="http://tasty.000.pe/admin/images/logo-mini.svg" alt="logo" /></a>
                </div>
                <div className="navbar-menu-wrapper d-flex align-items-stretch">
                    <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                        <span className="mdi mdi-menu"></span>
                    </button>
                    <div className="search-field d-none d-md-block">
                        <form className="d-flex align-items-center h-100" action="#">
                            <div className="input-group">
                                <div className="input-group-prepend bg-transparent">
                                    <i className="input-group-text border-0 mdi mdi-magnify"></i>
                                </div>
                                <input type="text" className="form-control bg-transparent border-0" placeholder="Search projects" />
                            </div>
                        </form>
                    </div>
                    <ul className="navbar-nav navbar-nav-right">
                        <li className="nav-item d-none d-lg-block full-screen-link">
                            <a className="nav-link">
                                <i className="mdi mdi-fullscreen" id="fullscreen-button"></i>
                            </a>
                        </li>
                    </ul>
                    <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                        <span className="mdi mdi-menu"></span>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Header