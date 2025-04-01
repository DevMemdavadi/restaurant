import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <>


            <div className="container-scroller mt-4">
                <div className="container-fluid page-body-wrapper full-page-wrapper">
                    <div className="content-wrapper d-flex align-items-center text-center error-page bg-primary">
                        <div className="row flex-grow">
                            <div className="col-lg-7 mx-auto text-white">
                                <div className="row align-items-center d-flex flex-row">
                                    <div className="col-lg-6 text-lg-right pr-lg-4">
                                        <h1 className="display-1 mb-0">404</h1>
                                    </div>
                                    <div className="col-lg-6 error-page-divider text-lg-left pl-lg-4">
                                        <h2>SORRY!</h2>
                                        <h3 className="font-weight-light">The page you’re looking for was not found.</h3>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-12 text-center mt-xl-2">
                                        <Link to={"/"} className="text-white font-weight-medium">Back to home</Link>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-12 mt-xl-2">
                                        <p className="text-white font-weight-medium text-center">Copyright &copy; 2024 All rights reserved.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Error