import axios, { all } from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

function Addmenu() {

  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const [category, setCategory] = useState([])

  const allcategory = async () => {
    const res = await axios.get("http://tasty.000.pe/API/viewcategory.php")
    setCategory(res.data)
  }

  useEffect(() => {
    allcategory()
  })

  const getdata = async (frm) => {

    var res = new FormData();
    res.append("menu", frm.mname);
    res.append("price", frm.price);
    res.append("info", frm.info);
    res.append("photo", frm.photo[0]);
    res.append("cid", frm.ctid);

    const val = await axios.post("http://tasty.000.pe/API/addmenu.php", res)
    alert(val.data["Result"])
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
                  <th>Select Category</th>
                  <td>
                    <select {...register("ctid", { required: true })} className='form-select rounded-0 p-1'>

                      <option value={""}>Select Category</option>
                      {
                        category.map((v, k) => {
                          return (
                            <option value={v.cid}>{v.ctname}</option>
                          )
                        })
                      }
                    </select>
                    <section className='fw-bold text-danger mt-2'>
                      {errors.ctid?.type == "required" && "Select Category *"}
                    </section>
                  </td>
                </tr>
                <tr>
                  <th>Name</th>
                  <td>
                    <input {...register("mname", { required: true, pattern: /^[a-zA-Z0-9\s]+$/ })} type='text' className='form-control rounded-0 p-2' placeholder='Enter Name'></input>
                    <section className='fw-bold text-danger mt-2'>
                      {errors.mname?.type == "required" && "Enter Name"}
                      {errors.mname?.type == "pattern" && "Enter Valid Name *"}
                    </section>
                  </td>
                </tr>
                <tr>
                  <th>Price</th>
                  <td>
                    <input {...register("price", { required: true, pattern: /^\$?\d+(\.\d{1,2})?$/ })} type='number' className='form-control rounded-0 p-2' placeholder='Enter Price'></input>
                    <section className='fw-bold text-danger mt-2'>
                      {errors.price?.type == "required" && "Enter Price"}
                      {errors.price?.type == "pattern" && "Enter Valid Price *"}
                    </section>
                  </td>
                </tr>
                <tr>
                  <th>Info</th>
                  <td>
                    <input {...register("info", { required: true, pattern: /^[a-zA-Z0-9\s\-,.']+$/ })} type='text' className='form-control rounded-0 p-2' placeholder='Enter Info'></input>
                    <section className='fw-bold text-danger mt-2'>
                      {errors.info?.type == "required" && "Enter Info"}
                      {errors.info?.type == "pattern" && "Enter Valid Info *"}
                    </section>
                  </td>
                </tr>
                <tr>
                  <th>Photo</th>
                  <td>
                    <input {...register("photo", { required: true, pattern: /\.(jpg|jpeg|png|gif)$/i })} type='file' className='form-control rounded-0 p-2' placeholder='Upload Photo'></input>
                    <section className='fw-bold text-danger mt-2'>
                      {errors.photo?.type == "required" && "Upload Photo"}
                      {errors.photo?.type == "pattern" && "Upload Valid Photo *"}
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

export default Addmenu