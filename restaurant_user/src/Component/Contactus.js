import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function Contactus() {

        const {register,handleSubmit,reset,formState:{errors}}=useForm()

        const getdata = async(val)=>{
            const res = await axios.post("http://tasty.000.pe/API/contactus.php", JSON.stringify(val))
            alert(res.data["Result"])
            reset()
        }

    return (
        <div className="container py-2">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10">
                    <div className="card border-0 rounded-4 shadow-lg bg-dark text-light">
                        <div className="card-body p-4">
                            <h2 className="card-title text-center text-primary mb-4"> Contact <strong className='text-danger'>Us</strong> </h2>
                            <form method="post" onSubmit={handleSubmit(getdata)}>
                                <table className="table table-borderless text-light">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <input {...register("name",{required: true, pattern: /^[A-Za-zÀ-ÿ]+([-'][A-Za-zÀ-ÿ]+)*$/})} type="text" className="form-control form-control-lg bg-light border-success custom-shadow" placeholder="Your Name" aria-label="Name"/>
                                                <section className='text-danger mt-2 fw-bold'>
                                                    {errors.name ?. type == "required" && "Enter Your Name"}
                                                    {errors.name ?. type == "pattern" && "Enter Valid Name *"}
                                                </section>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input {...register("email",{required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/})} type="email" className="form-control form-control-lg bg-light border-info custom-shadow" placeholder="Your Email" aria-label="Email"/>
                                                <section className='text-danger mt-2 fw-bold'>
                                                    {errors.email ?. type == "required" && "Enter Your Email"}
                                                    {errors.email ?. type == "pattern" && "Enter Valid Email *"}
                                                </section>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input {...register("phone",{required: true, pattern: /^\d{10}$/})} type="tel" className="form-control form-control-lg bg-light border-warning custom-shadow" placeholder="Your Phone Number" aria-label="Phone"/>
                                                <section className='text-danger mt-2 fw-bold'>
                                                    {errors.phone ?. type == "required" && "Enter Your Contact"}
                                                    {errors.phone ?. type == "pattern" && "Enter Valid Contact *"}
                                                </section>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <textarea {...register("feedback",{required:  true})} className="form-control form-control-lg bg-light border-danger custom-shadow" placeholder="Your Feedback" rows="5" aria-label="Feedback"></textarea>
                                                <section className='text-danger mt-2 fw-bold'>
                                                    {errors.feedback ?. type == "required" && "Enter Your Feedback"}
                                                </section>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="text-center mt-4">
                                    <button type="submit" className="btn btn-primary btn-lg px-5 py-3 rounded-pill custom-shadow" aria-label="Send Message"> Send </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contactus;
