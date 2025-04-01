import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

function Registration() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const nav = useNavigate()

    const getdata = async (val) => {
        const res = await axios.post("http://tasty.000.pe/API/adduser.php", JSON.stringify(val))
        alert(res.data["Result"])
        reset()

        if (res.data["Result"] == "Registration Successfully")
         {
            nav("/login")
         }
    }

    return (
        <>

            <div className="login-contect py-5">
                <div className="container py-xl-5 py-3">
                    <div className="login-body">
                        <div className="login p-4 mx-auto">
                            <h5 className="text-center mb-4">Register Now</h5>
                            <form method="post" onSubmit={handleSubmit(getdata)}>
                                <div className="form-group">
                                    <label>Your Name</label>
                                    <input {...register("name", { required: true, pattern: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/ })} type="text" className="form-control" placeholder="Enter Your Name" />
                                    <section className='fw-bold mt-2 text-danger'>
                                        {errors.name?.type == "required" && "Enter Name"}
                                        {errors.name?.type == "pattern" && "Enter Valid Name *"}
                                    </section>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input {...register("pass", { required: true, pattern: /^.{8,}$/ })} type="password" className="form-control" placeholder="Enter Your Password" />
                                    <section className='fw-bold mt-2 text-danger'>
                                        {errors.pass?.type == "required" && "Enter Password"}
                                        {errors.pass?.type == "pattern" && "Enter Valid Password *"}
                                    </section>
                                </div>
                                <div className="form-group">
                                    <label>Contact</label>
                                    <input {...register("contact", { required: true, pattern: /^\d{10}$/ })} type="number" className="form-control" placeholder="Enter Your Contact" />
                                    <section className='fw-bold mt-2 text-danger'>
                                        {errors.contact?.type == "required" && "Enter Contact"}
                                        {errors.contact?.type == "pattern" && "Enter Valid Contact *"}
                                    </section>
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input {...register("email", { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })} type="email" className="form-control" placeholder="Enter Your Email" />
                                    <section className='fw-bold mt-2 text-danger'>
                                        {errors.email?.type == "required" && "Enter Email"}
                                        {errors.email?.type == "pattern" && "Enter Valid Email *"}
                                    </section>
                                </div>
                                <div className="form-group">
                                    <label>City</label>
                                    <input {...register("city", { required: true, pattern: /^[a-zA-Z\s.'-]+$/ })} type="text" className="form-control" placeholder="Enter Your City" />
                                    <section className='fw-bold mt-2 text-danger'>
                                        {errors.city?.type == "required" && "Enter City"}
                                        {errors.city?.type == "pattern" && "Enter Valid City *"}
                                    </section>
                                </div>
                                <button type="submit" className="btn submit mb-4">Register</button>
                                <p className="account-w3ls text-center text-da">Do you have an account ? <Link to={"/login"}>Login</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registration