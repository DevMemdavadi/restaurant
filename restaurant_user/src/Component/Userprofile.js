import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

function Userprofile() {

  const [profile, setProfile] = useState([])

  const [edit, setEdit] = useState([])

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: edit[0]
  })

  const userprofile = async () => {
    var id = window.sessionStorage.getItem("userid")
    const obj = { uid: id }
    const res = await axios.post("http://tasty.000.pe/API/viewuserprofile.php", JSON.stringify(obj))
    setProfile(res.data)

  }

  const dataupdate = async (frm) => {
    const res = await axios.post("http://tasty.000.pe/API/updateuserprofile.php", JSON.stringify(frm))
    alert(res.data["Result"])
    userprofile()
  }

  useEffect(() => {
    userprofile()
  }, [])

  const getrec = (id) => {
    const row = profile.filter(obj => obj.uid == id)
    setEdit(row[0])
    reset(row[0])
  }

  return (
    <>

      {
        profile.map((v,k)=>{
          return(

            <section class="ab-info-main py-5 col-md-12" id="contact">
              <div class="container py-xl-5 py-lg-3">
                <div class="title-section text-center mb-md-5 mb-4">
                  <h3 class="w3ls-title mb-3">User <span>Profile</span></h3>
                </div>
                <div class="row contact-agileinfo pt-lg-4">
                  <div class="col-md-5 address  bg-light border border-secondary rounded p-4 shadow-lg m-auto">
                    <h3 class="footer-title mb-4 pb-lg-2">Your Profile</h3>
                    <div class="row address-info-w3ls">
                      <div class="col-2 address-left">
                        <span class="fa-2x fa-solid fa-user"></span>
                      </div>
                      <div class="col-10 address-right mt-2">
                        <p className='fs-2' style={{color: "red", fontWeight: "bold"}}>{v.name}</p>
                      </div>
                    </div>
                    <div class="row address-info-w3ls my-2">
                      <div class="col-2 address-left">
                        <span class="fa-2x fa-solid fa-phone"></span>
                      </div>
                      <div class="col-10 address-right mt-2">
                        <p className='fs-2'>
                          <a style={{color: "red", fontWeight: "bold"}}>+91 {v.contact}</a>
                        </p>
                      </div>
                    </div>
                    <div class="row address-info-w3ls">
                      <div class="col-2 address-left">
                        <span class="fa-2x fa-solid fa-envelope"></span>
                      </div>
                      <div class="col-10 address-right mt-2">
                        <p className='fs-2' style={{color: "red", fontWeight: "bold"}}>{v.email}</p>
                      </div>
                    </div>
                    <div class="row address-info-w3ls">
                      <div class="col-2 address-left">
                        <span class="fa-2x fa-solid fa-city"></span>
                      </div>
                      <div class="col-10 address-right mt-2">
                        <p className='fs-2' style={{color: "red", fontWeight: "bold"}}>{v.city}</p>
                      </div>
                    </div>
                    <div class="row address-info-w3ls">
                      <div class="col-2 address-left">
                        <span class="fa-2x fa-solid fa-pen-to-square"></span>
                      </div>
                      <div class="col-10 address-right mt-2">
                        <button onClick={()=>getrec(v.uid)} data-bs-target='#box' data-bs-toggle='modal' className='btn btn-outline-primary rounded-0'>Edit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>)
        })
      }

      <section className='modal' id='box' data-bs-backdrop='static'>
        <section className='modal-dialog'>
          <section className='modal-content'>
            <section className='modal-header fw-bold fs-4'>Update Profile<span data-bs-dismiss='modal' className='btn btn-close'></span></section>
            <section className='modal-body'>
              <form method="post" onSubmit={handleSubmit(dataupdate)}>
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
                <button data-bs-dismiss='modal' type="submit" className="btn submit mb-4">Update</button>
              </form>
            </section>
          </section>
        </section>
      </section>
    </>
  )
}

export default Userprofile