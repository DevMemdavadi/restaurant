import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

function Adminlogin() {

    const nav = useNavigate()

    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const getdata = async (val) => {
        const res = await axios.post("http://tasty.000.pe/API/adminlogin.php", JSON.stringify(val), {
        });

        if (res.data["Result"] == "Login Successfully") {
            alert(res.data["Result"])
            window.sessionStorage.setItem("adminid", res.data["info"]["aid"])
            nav('/dashboard/addcategory');
        }
        else {
            alert(res.data["Result"])
        }
        reset()
    }

    return (
        <>
            <div className="container-scroller">
                <div className="container-fluid page-body-wrapper full-page-wrapper">
                    <div className="content-wrapper d-flex align-items-center auth">
                        <div className="row flex-grow">
                            <div className="col-lg-4 mx-auto">
                                <div className="auth-form-light text-left p-5">
                                    <div className="brand-logo">
                                        <img src="images/logo.svg" />
                                    </div>
                                    <h4 className="font-weight-light">Login to continue.</h4>
                                    <form className="pt-3" method='post' onSubmit={handleSubmit(getdata)}>
                                        <div className="form-group">
                                            <input {...register("unm", { required: true })} type="text" className="form-control form-control-lg" placeholder="Username" />
                                            <section className='fw-bold text-danger mt-2'>
                                                {errors.unm?.type == "required" && "Enter Username"}
                                            </section>
                                        </div>
                                        <div className="form-group">
                                            <input {...register("pass", { required: true })} type="password" className="form-control form-control-lg" placeholder="Password" />
                                            <section className='fw-bold text-danger mt-2'>
                                                {errors.pass?.type == "required" && "Enter Password"}
                                            </section>
                                        </div>
                                        <div className="mt-3 d-grid gap-2">
                                            <button type='submit' className="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn">Login</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Adminlogin