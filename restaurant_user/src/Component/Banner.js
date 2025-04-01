import React from 'react'
import { Link } from 'react-router-dom'

function Banner() {

        var stusid = window.sessionStorage.getItem("userid") || false;

    return (
        <>

            <div className="baneer-w3ls">
                <div className="row no-gutters">
                    <div className="col-xl-5 col-lg-6">
                        <div className="banner-left-w3">
                            <div className="container">
                                <div className="banner-info_agile_w3ls">
                                    <h5 className='ms-2'>Only Fresh Meals</h5>
                                    <h3 className="text-da mb-4 ms-2">Restaurant <span>Online</span> </h3>
                                    <p className='ms-2'>A recipe has no soul. You, as the cook, must bring soul to the recipe.</p>
                                    {
                                        stusid ? "" : 
                                        <Link to={"/registration"} className="button-w3ls mt-5 ms-2">Registration
                                            <span className="fa fa-caret-right ml-1" aria-hidden="true"></span>
                                        </Link>
                                    }
                                    {
                                        stusid ? "" : 
                                        <Link to={"/login"} className="button-w3ls mt-5 ml-2">Login Now
                                            <span className="fa fa-caret-right ml-1" aria-hidden="true"></span>
                                        </Link>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6 callbacks_container">
                        <div className="csslider infinity" id="slider1">
                            <input type="radio" name="slides" checked="checked" id="slides_1" />
                            <input type="radio" name="slides" id="slides_2" />
                            <input type="radio" name="slides" id="slides_3" />
                            <ul className="banner_slide_bg">
                                <li>
                                    <div className="banner-top1 mt-2"></div>
                                </li>
                                <li>
                                    <div className="banner-top2 mt-2"></div>
                                </li>
                                <li>
                                    <div className="banner-top3 mt-2"></div>
                                </li>
                            </ul>
                            <div className="arrows">
                                <label for="slides_1"></label>
                                <label for="slides_2"></label>
                                <label for="slides_3"></label>
                            </div>
                            <div className="navigation">
                                <div>
                                    <label for="slides_1"></label>
                                    <label for="slides_2"></label>
                                    <label for="slides_3"></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner