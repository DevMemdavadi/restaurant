import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

function Addcategory() {

  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const getdata = async (val) => {
    const res = await axios.post("http://tasty.000.pe/API/addcategory.php", JSON.stringify(val))
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
                    <input {...register("ctname", { required: true, pattern: /^[A-Za-z\s]+$/ })} type='text' className='form-control rounded-0 p-2' placeholder='Enter Category'></input>
                    <section className='fw-bold text-danger mt-2'>
                      {errors.ctname?.type == "required" && "Enter Category"}
                      {errors.ctname?.type == "pattern" && "Enter Valid Category *"}
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

export default Addcategory