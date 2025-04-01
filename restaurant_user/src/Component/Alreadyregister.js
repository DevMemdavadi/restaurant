import React from 'react'

function Alreadyregister() {
    return (
        <>
            <div className="container mt-2">


                <div className="card shadow-sm border-success">
                    <div className="card-body">
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th colspan="2" className="text-success">Registration Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="w-25 text-center">
                                        <svg className="bi text-success" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M8 0a8 8 0 1 1-8 8A8 8 0 0 1 8 0zm0 1a7 7 0 1 0 7 7A7 7 0 0 0 8 1zm-1 3v4h2V4H7zm1 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                        </svg>
                                    </td>
                                    <td>
                                        <h5 className="card-title">Registration Complete!</h5>
                                        <p className="card-text mb-0">Your registration was successful.</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="card shadow-sm border-info mb-4 mt-2">
                    <div className="card-body">
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th colspan="2" className="text-info">Login Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="w-25 text-center">
                                        <svg className="bi text-info" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M8 0a8 8 0 1 1-8 8A8 8 0 0 1 8 0zm0 1a7 7 0 1 0 7 7A7 7 0 0 0 8 1zm-1 3v4h2V4H7zm1 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                        </svg>
                                    </td>
                                    <td>
                                        <h5 className="card-title">You’re Logged In!</h5>
                                        <p className="card-text mb-0">You are already logged in. Feel free to continue where you left off or explore more options.</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Alreadyregister