import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Sidebar() {

    const nav = useNavigate()

    const logout = () => {
        window.sessionStorage.clear()
        nav("/")
    }
    return (
        <>
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
                <ul className="nav">
                    <li className="nav-item nav-profile">
                        <a className="nav-link">
                            <div className="nav-profile-image">
                                <img src="http://tasty.000.pe/admin/images/faces/face1.jpg" alt="profile" />
                                <span className="login-status online"></span>
                            </div>
                            <div className="nav-profile-text d-flex flex-column">
                                <span className="font-weight-bold mb-2">Dev Memdavadi</span>
                                <span className="text-secondary text-small">Project Admin</span>
                            </div>
                            <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <Link to={"/dashboard/addcategory"} className="nav-link">
                            <span className="menu-title">Add Category</span>
                            <i className="fa fa-dot-circle-o menu-icon"></i>
                        </Link>
                        <div className="collapse" id="icons">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item">
                                    <a className="nav-link" href="../../pages/icons/font-awesome.html">Font Awesome</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link to={"/dashboard/viewcategory"} className="nav-link">
                            <span className="menu-title">View Category</span>
                            <i className="fa fa-eye menu-icon"></i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/dashboard/addmenu"} className="nav-link">
                            <span className="menu-title">Add Menu</span>
                            <i className="fa fa-list-alt menu-icon"></i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/dashboard/viewmenu"} className="nav-link">
                            <span className="menu-title">View Menu</span>
                            <i className="fa fa-eye menu-icon"></i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/dashboard/addtable"} className="nav-link">
                            <span className="menu-title">Add Table</span>
                            <i className="fa fa-table menu-icon"></i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/dashboard/viewtable"} className="nav-link">
                            <span className="menu-title">View Table</span>
                            <i className="fa fa-eye menu-icon"></i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/dashboard/manageuser"} className="nav-link">
                            <span className="menu-title">Manage Users</span>
                            <i className="fa fa-users menu-icon"></i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/dashboard/contactus"} className="nav-link">
                            <span className="menu-title">Contact Us</span>
                            <i className="fa fa-mobile menu-icon"></i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link onClick={() => logout()} to={"/"} className="nav-link">
                            <span className="menu-title">Logout</span>
                            <i className="fa fa-angle-double-right menu-icon"></i>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Sidebar