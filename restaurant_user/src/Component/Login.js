import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

        const nav=useNavigate()

        const {register,handleSubmit,reset,formState:{errors}}=useForm()

        const getdata = async (val)=>{
            const res = await axios.post("http://tasty.000.pe/API/userlogin.php", JSON.stringify(val))

                if(res.data["Result"] == "Login Successfully")
                {
                    alert(res.data["Result"])
                    window.sessionStorage.setItem("userid", res.data["Info"]["uid"])
                    nav("/userprofile")
                }
                else
                {
                    alert(res.data["Result"])
                }
                    reset()

        }

    return (
        <>

            <div className="login-contect py-5">
                <div className="container py-xl-5 py-3">
                    <div className="login-body">
                        <div className="login p-4 mx-auto">
                            <h5 className="text-center mb-4">Login Now</h5>
                            <form method="post" onSubmit={handleSubmit(getdata)}>
                                <div className="form-group">
                                    <label>Your Name</label>
                                    <input {...register("unm", {required: true, pattern: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/ })} type="text" className="form-control" placeholder="Enter Your Name"/>
                                    <section className='text-danger fw-bold mt-2'>
                                        {errors.unm ?. type == "required" && "Enter Name"}
                                        {errors.unm ?. type == "pattern" && "Enter Valid Name *"}
                                    </section>
                                </div>
                                <div className="form-group">
                                    <label className="mb-2">Password</label>
                                    <input  {...register("upass", {required: true, pattern: /^.{8,}$/ })} type="password" className="form-control" placeholder="Enter Your Password"/>
                                    <section className='text-danger fw-bold mt-2'>
                                        {errors.upass ?. type == "required" && "Enter Password"}
                                        {errors.upass ?. type == "pattern" && "Enter Valid Password *"}
                                    </section>
                                </div>
                                <button type="submit" className="btn submit mb-4">Login</button>
                                <p className="forgot-w3ls text-center mb-3">
                                    <a href="#" className="text-da">Forgot your password?</a>
                                </p>
                                <p className="account-w3ls text-center text-da"> Don't have an account ? <Link to={"/registration"}>Create one now</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login