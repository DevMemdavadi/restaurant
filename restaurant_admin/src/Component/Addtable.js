import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

function Addtable() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const getdata = async (val) => {
        const res = await axios.post("http://tasty.000.pe/API/addtable.php", JSON.stringify(val))
        alert(res.data["Result"])
        reset()
    }

    return (
        <>
            <section className='row'>
                <section className='col-md-12 table-responsive'>
                    <form method='post' onSubmit={handleSubmit(getdata)}>
                        <table className='table table-bordered w-100 table-dark'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <td>
                                        <input {...register("title", { required: true, pattern: /^[a-zA-Z]+(?: [a-zA-Z]+)*$/ })} type='text' placeholder='Enter Title' className='form-control p-2 rounded-0'></input>
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
                                        <center><button className='btn btn-outline-primary btn-rounded'>ADD</button></center>
                                    </td>
                                </tr>
                            </thead>
                        </table>
                    </form>
                </section>
            </section>
        </>
    )
}

export default Addtable