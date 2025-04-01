import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Tablebooking() {

    const [table, setTable] = useState([])

    const alltable = async () => {
        const res = await axios.get("http://tasty.000.pe/API/tableavailable.php")
        setTable(res.data)
    }

    useEffect(() => {
        alltable()
    }, [])

    const book = async (tid) => {
        var usid = window.sessionStorage.getItem("userid")
        var obj = { userid: usid, tableid: tid }
        const res = await axios.post("http://tasty.000.pe/API/addorder.php", JSON.stringify(obj))
        alert(res.data["Result"])
        alltable()

    }

    return (
        <>


            <div className="container mt-2">
                <div className="row">
                    {
                        table.map((v, k) => {
                            return (
                                <div className="col-md-4 mt-2">
                                    <div className="card border-primary shadow-lg rounded-0">
                                        <img src="../images/PRINT-SIZE-178-scaled.png" className="card-img-top rounded-0" alt="Image Description" />
                                        <div className="card-body text-center">
                                            <h5 className="card-title mb-3">
                                                <a href="" className="text-dark text-decoration-none">{v.title}</a>
                                            </h5>
                                            <p className="card-text text-muted mb-4">Capacity {v.capacity}</p>
                                            <div className="d-flex justify-content-center">
                                                <span className="text-muted fw-bold">{v.status}</span>
                                            </div>
                                        </div>
                                        <div className="card-footer text-center border-0 bg-transparent">
                                            <button onClick={() => book(v.tid)} className='btn btn-outline-primary rounded-0'>Book Now</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default Tablebooking