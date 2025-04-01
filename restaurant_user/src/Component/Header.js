import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header() {

        var stusid = window.sessionStorage.getItem("userid") || false;

        const nav = useNavigate()

        const logout=()=>{
            window.sessionStorage.clear()
            nav("/")
        }

    return (
        <>

            <div id='home' className="main-top py-1">
                <div className="container">
                    <div className="nav-content">
                        <h1>
                            <a id="logo" className="logo" href="">
                                <img src="images/logo.png" alt="" className="img-fluid" /><span>Tasty</span> Burger
                            </a>
                        </h1>
                        <div className="nav_web-dealingsls">
                            <nav>
                                <label for="drop" className="toggle">More</label>
                                <input type="checkbox" id="drop" />
                                <ul className="menu">
                                    <li><Link to={"/"}>Home</Link></li>
                                    <li><Link to={"/aboutus"}>About Us</Link></li>
                                    {stusid ? <li><Link to={"/userprofile"}>Profile</Link></li> : ""}
                                    {stusid ? <li><Link to={"/tablebooking"}>Table Booking</Link></li>:""}
                                    {stusid ? <li><Link to={"/menu"}>Order Now</Link></li> : <li><Link to={"/menu"}>Menu</Link></li>}
                                    {stusid ? "" : <li><Link to={"/registration"}>Registration</Link></li>}
                                    {stusid ? "" : <li><Link to={"/login"}>Login</Link></li>}
                                    {stusid ? "" : <li><Link to={"/login"}>Table Booking</Link></li>}
                                    {stusid ? <li><Link to={"/viewcart"}>View Cart</Link></li>: ""}
                                    {stusid ? <li><Link to={"/vieworderstatus"}>View Order Status</Link></li>:""}
                                    <li><Link to={"contactus"}>Contact Us</Link></li>
                                    {stusid ? <li><Link onClick={()=>logout()} to={"/"}>Logout</Link></li> : ""}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header