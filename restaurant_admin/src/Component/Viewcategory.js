import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

function Viewcategory() {

    const [category, setCategory] = useState([])

    const [edit, setEdit] = useState([])

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: edit[0]
    })

    const allcategory = async () => {
        const res = await axios.get("http://tasty.000.pe/API/viewcategory.php")
        setCategory(res.data)
    }

    useEffect(() => {
        allcategory()
    }, [])

    const dataupdate = async (frm) => {
        const res = await axios.post("http://tasty.000.pe/API/updatecategory.php", JSON.stringify(frm))
        alert(res.data["Result"])
        allcategory()
    }

    const delrec = async (id) => {
        if (window.confirm("Are You Sure ?")) {
            const obj = { did: id }
            const res = await axios.post("http://tasty.000.pe/API/deletecategory.php", JSON.stringify(obj))
            alert(res.data["Result"])
            allcategory()
        }
    }

    const getrec = (id) => {
        const row = category.filter(obj => obj.cid == id)
        setEdit(row[0])
        reset(row[0])
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
                                <th colSpan={2}><center>Actions</center></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                category.map((v, k) => {
                                    return (
                                        <tr>
                                            <td>{k + 1}</td>
                                            <td>{v.ctname}</td>
                                            <td><center><button onClick={() => delrec(v.cid)} className='btn btn-outline-danger btn-rounded'>Delete</button></center></td>
                                            <td><center><button data-bs-target='#box' data-bs-toggle='modal' onClick={() => getrec(v.cid)} className='btn btn-outline-info btn-rounded'>Edit</button></center></td>
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
                        <section className='modal-header fs-3 fw-bold'>Update Category<span data-bs-dismiss='modal' className='btn btn-close'></span></section>
                        <section className='modal-body'>
                            <form method='post' onSubmit={handleSubmit(dataupdate)}>
                                <table className='table table-bordered w-100 table-dark'>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <td>
                                                <input {...register("ctname", { required: true, pattern: /^[A-Za-z\s]+$/ })} type='text' className='form-control rounded-0 p-2' placeholder='Enter Category'></input>
                                                <section className='fw-bold text-danger mt-2'>
                                                    {errors.ctname?.type == "required" && "Enter Category"}
                                                    {errors.ctname?.type == "pattern" && "Enter Valid Category *"}
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

export default Viewcategory