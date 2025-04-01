import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Manageuser() {

    const nav = {}=useNavigate()

    const [user, setUser] = useState([])

    const allusers = async () => {
        const res = await axios.get("http://tasty.000.pe/API/manageuser.php")
        setUser(res.data)

    }

    useEffect(() => {
        allusers()
    }, [])

    const delrec = async (id) => {
        if (window.confirm("Are You Sure ?")) {
            const obj = { did: id }
            const res = await axios.post("http://tasty.000.pe/API/deleteuser.php", JSON.stringify(obj))
            alert(res.data["Result"])
            allusers()
        }
    }

    const userstatus = async(id,status)=>{
        const obj={uid: id, sts: status}
        const res = await axios.post("http://tasty.000.pe/API/updateuserstatus.php", JSON.stringify(obj))
        alert(res.data["Result"])
        allusers()
    }

    const order = (id)=>{
        nav(`/dashboard/vieworders/${id}`)
    }

    return (
        <>
            <section className='row'>
                <section className='col-md-12 table-responsive'>
                    <table className='table table-bordered w-100 table-dark'>
                        <thead>
                            <tr>
                                <th>Srno</th>
                                <th>Name</th>
                                <th>Contact</th>
                                <th>Email</th>
                                <th>City</th>
                                <th>Status</th>
                                <th colSpan={2}><center>Actions</center></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                user.map((v, k) => {
                                    return (
                                        <tr>
                                            <td>{k + 1}</td>
                                            <td>{v.name}</td>
                                            <td>{v.contact}</td>
                                            <td>{v.email}</td>
                                            <td>{v.city}</td>
                                            <td>
                                                {
                                                    v.status == "Deactive" ? <button onClick={()=>userstatus(v.uid, v.status)} className='btn btn-danger btn-rounded'>{v.status}</button>
                                                    :
                                                   <button onClick={()=>userstatus(v.uid, v.status)} className='btn btn-success btn-rounded'>{v.status}</button>
                                                }
                                            </td>
                                            <td>
                                                <center><button onClick={() => delrec(v.uid)} className='btn btn-outline-danger btn-rounded'>Delete</button></center>
                                            </td>
                                            <td>
                                                <center><button onClick={()=> order(v.uid)} className='btn btn-outline-primary btn-rounded'>Order</button></center>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </section>
            </section>
        </>
    )
}

export default Manageuser