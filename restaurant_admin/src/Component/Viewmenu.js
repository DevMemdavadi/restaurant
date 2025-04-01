import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

var imgpath;
function Viewmenu() {


    const [menu, setMenu] = useState([])
    const [edit, editMenu] = useState([])
    const [category, setCategory] = useState([])

    const allcategory = async () => {
        const res = await axios.get("http://tasty.000.pe/API/viewcategory.php")
        setCategory(res.data)
    }

    useEffect(() => {
        allcategory()
    }, [])

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: edit[0]
    })

    const allmenu = async () => {
        const res = await axios.get("http://tasty.000.pe/API/viewmenuadmin.php");
        setMenu(res.data)
    }

    useEffect(() => {
        allmenu()
    }, [])

    const updatedata = async (frm) => {
        console.log(frm)
        var res = new FormData();
        res.append("menu", frm.mname);
        res.append("price", frm.price);
        res.append("info", frm.info);
        res.append("photo", frm.photo[0]);
        res.append("cid", frm.cid);
        res.append("mid", frm.mid)
        const val = await axios.post("http://tasty.000.pe/API/updatemenu.php", res)
        alert(val.data["Result"])
        allmenu()
    }

    const delrec = async (id) => {
        if (window.confirm("Are You Sure ?")) {
            const obj = { did: id }
            const res = await axios.post("http://tasty.000.pe/API/deletemenu.php", JSON.stringify(obj))
            alert(res.data["Result"])
            allmenu()
        }
    }

    const getrec = (id, i) => {
        const row = menu.filter(obj => obj.mid == id)
        editMenu(row[0])
        imgpath = i
        reset(row[0])
    }

    return (
        <>
            <section className='row'>
                <section className='col-md-12 table-responsive'>
                    <table className='table table-bordered w-100 table-dark' align='center'>
                        <thead>
                            <tr>
                                <th>Srno</th>
                                <th>Category</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Info</th>
                                <th>Photo</th>
                                <th colSpan={2}><center>Actions</center></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((v, k) => {
                                    var url = "http://tasty.000.pe/API/Upload/" + v.photo;
                                    return (
                                        <tr>
                                            <td>{k + 1}</td>
                                            <td>{v.ctname}</td>
                                            <td>{v.mname}</td>
                                            <td>{v.price}</td>
                                            <td>{v.info}</td>
                                            <td>
                                                <img src={url} width={100} height={100} className='rounded-0'></img>
                                            </td>
                                            <td><center><button onClick={() => delrec(v.mid)} className='btn btn-outline-danger btn-rounded'>Delete</button></center></td>
                                            <td><center><button onClick={() => getrec(v.mid, v.photo)} data-bs-target='#box' data-bs-toggle='modal' className='btn btn-outline-info btn-rounded'>Edit</button></center></td>
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
                        <section className='modal-header fs-3 fw-bold'>Update Menu<span data-bs-dismiss='modal' className='btn btn-close'></span></section>
                        <section className='modal-body'>
                            <form method='post' onSubmit={handleSubmit(updatedata)}>
                                <table className='table table-bordered w-100 table-dark'>
                                    <thead>
                                        <tr>
                                            <th>Select Category</th>
                                            <td>
                                                <select {...register("cid", { required: true })} className='form-select rounded-0 p-1'>

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
                                                <input {...register("photo", { pattern: /\.(jpg|jpeg|png|gif)$/i })} type='file' className='form-control rounded-0 p-2' placeholder='Upload Photo'></input>
                                                <section className='fw-bold text-danger mt-2'>
                                                    {errors.photo?.type == "pattern" && "Upload Valid Photo *"}
                                                </section>
                                                <img src={"http://tasty.000.pe/API/Upload/" + imgpath} width={100}></img>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>
                                                <center><button data-bs-dismiss='modal' type='submit' className='btn btn-outline-warning btn-rounded'>Update</button></center>
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

export default Viewmenu