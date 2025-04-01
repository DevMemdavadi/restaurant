import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'

function Viewtable() {

    const [table, setTable] = useState([])
    const [edit, editTable] = useState([])

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: edit[0]
    })

    const alltable = async () => {
        const res = await axios.get("http://tasty.000.pe/API/viewtable.php")
        setTable(res.data)
    }

    useEffect(() => {
        alltable()
    }, [])

    const dataupdate = async (frm) => {
        const res = await axios.post("http://tasty.000.pe/API/updatetable.php", JSON.stringify(frm))
        alert(res.data["Result"])
        alltable()
    }

    const delrec = async (id) => {
        if (window.confirm("Are You Sure ?")) {
            const obj = { did: id }
            const res = await axios.post("http://tasty.000.pe/API/deletetable.php", JSON.stringify(obj))
            alert(res.data["Result"])
            alltable()
        }
    }

    const getrec = (id) => {
        const row = table.filter(obj => obj.tid == id)
        editTable(row[0])
        reset(row[0])
    }

    const tablests = async (id,status)=>{
        const obj ={tid : id, sts: status}
        const res = await axios.post("http://tasty.000.pe/API/updatetablestatus.php", JSON.stringify(obj))
            alert(res.data["Result"])
            alltable()
    }

    return (
        <>
            <section className='row'>
                <section className='col-md-12 table-responsive'>
                    <table className='table table-bordered w-100 table-dark' align='center'>
                        <thead>
                            <tr>
                                <th>Srno</th>
                                <th>Name</th>
                                <th>Capacity</th>
                                <th colSpan={2}><center>Actions</center></th>
                                <th>Tables</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                table.map((v, k) => {
                                    return (
                                        <tr>
                                            <td>{k + 1}</td>
                                            <td>{v.title}</td>
                                            <td>{v.capacity}</td>

                                            <td><center><button onClick={() => delrec(v.tid)} className='btn btn-outline-danger btn-rounded'>Delete</button></center></td>
                                            <td><center><button onClick={() => getrec(v.tid)} data-bs-target='#box' data-bs-toggle='modal' className='btn btn-outline-info btn-rounded'>Edit</button></center></td>
                                            <td>
                                                {
                                                    v.status == "Available" ? <button onClick={()=>tablests(v.tid, v.status)} className='btn btn-outline-success btn-rounded'>{v.status}</button>
                                                    :
                                                    <button onClick={()=>tablests(v.tid, v.status)} className='btn btn-outline-danger btn-rounded'>{v.status}</button>
                                                }
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </section>
            </section>

            <section className='modal' id='box' data-bs-backdrop='static'>
                <section className='modal-dialog'>
                    <section className='modal-content'>
                        <section className='modal-header fs-3 fw-bold'>Update Table<span data-bs-dismiss='modal' className='btn btn-close'></span></section>
                        <section className='modal-body'>

                            <form method='post' onSubmit={handleSubmit(dataupdate)}>
                                <table className='table table-bordered w-100 table-dark'>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <td>
                                                <input {...register("title", { required: true })} type='text' placeholder='Enter Title' className='form-control p-2 rounded-0'></input>
                                                <section className='fw-bold text-danger mt-2'>
                                                    {errors.title?.type == "required" && "Enter Name"}
                                                    {errors.title?.type == "pattern" && "Enter Valid Name *"}
                                                </section>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Capacity</th>
                                            <td>
                                                <input {...register("capacity", { required: true, pattern: /^\d+(\.\d+)?\s*[A-Za-z]*$/ })} type='number' placeholder='Enter Capacity' className='form-control p-2 rounded-0'></input>
                                                <section className='fw-bold text-danger mt-2'>
                                                    {errors.capacity?.type == "required" && "Enter Capacity"}
                                                    {errors.capacity?.type == "pattern" && "Enter Valid Capacity *"}
                                                </section>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>
                                                <center><button data-bs-dismiss='modal' className='btn btn-outline-warning btn-rounded'>Update</button></center>
                                            </td>
                                        </tr>
                                    </thead>
                                </table>
                            </form>
                        </section>
                    </section>
                </section>
            </section>
        </>
    )
}

export default Viewtable