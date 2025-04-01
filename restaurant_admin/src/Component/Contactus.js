import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Contactus() {

    const [contact,setContact]=useState([])

    const allcontact = async ()=>{
      const res = await axios.get("http://tasty.000.pe/API/viewcontactus.php")
      setContact(res.data)
    }

    useEffect(()=>{
      allcontact()
    })

    const delrec = async (id)=>{
      if(window.confirm("Are You Sure ?"))
        {
          const obj = {did:id}
          const res = await axios.post("http://tasty.000.pe/API/deletecontactus.php", JSON.stringify(obj))
          alert(res.data["Result"])
          allcontact()
        }
    }

    const getstatus = async (id)=>{
      const obj = {status:id}
      const res = await axios.post("http://tasty.000.pe/API/contactusstatus.php", JSON.stringify(obj))
      alert(res.data["Result"])
      allcontact()
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
                <th>Email</th>
                <th>Phone Number</th>
                <th>Feedback</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                contact.map((v,k)=>{

                  return(
                    <tr>
                      <td>{k+1}</td>
                      <td>{v.name}</td>
                      <td>{v.email}</td>
                      <td>{v.phone}</td>
                      <td>{v.feedback}</td>
                      <td>
                        {
                          
                          v.status =="Pending" ? 
                          <button onClick={()=>getstatus(v.cid)} className='btn btn-outline-danger btn-rounded'>{v.status}</button>
                          :
                          <button onClick={()=>getstatus(v.cid)} className='btn btn-outline-success btn-rounded'>{v.status}</button>
                        }
                      </td>
                      <td>
                        <button onClick={()=>delrec(v.cid)} className='btn btn-outline-danger btn-rounded'>Delete</button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </section>
      </section>
    </>
  )
}

export default Contactus