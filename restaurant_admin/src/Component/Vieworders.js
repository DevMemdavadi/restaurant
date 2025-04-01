import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useReactToPrint } from 'react-to-print'
import PrintableRecord from './PrintableRecord';

function Vieworders() {

    const componentRef = useRef()

    const { userid } = useParams()
    const [placeorder, setPlaceorder] = useState([])
    const [menu, setMenu] = useState([])
    const [menu1, setMenu1] = useState([])
    const [ordersts, setOrdersts] = useState([])
    const [selectedRecord, setSelectedRecord] = useState(null);

    const { register, handleSubmit } = useForm()

    const fetchdata = async () => {

        const obj = { uid: userid }
        const res = await axios.post("http://tasty.000.pe/API/viewplaceorder.php", JSON.stringify(obj))
        setPlaceorder(res.data.Result)
        setMenu(res.data.Menu)
        console.log(res.data)
    }

    useEffect(() => {
        fetchdata()
    }, [])

    const delrec = async (tid, oid) => {
        if (window.confirm("Are You Sure ?")) {
            const obj = { table: tid, order: oid }
            const res = await axios.post("http://tasty.000.pe/API/deleteplaceorder.php", JSON.stringify(obj))
            alert(res.data["Result"])
            alert(res.data["Table"])
            fetchdata()
        }
    }

    const getdata = async (val) => {
        const obj = { 'order': ordersts.order, 'table': ordersts.table, 'orderstatus': val.orderstatus }
        const res = await axios.post("http://tasty.000.pe/API/orderstatus.php", obj)
        alert(res.data["Result"])
        alert(res.data["Table Status"])
        fetchdata()
    }

    const allmenu = (menuid) => {
        var marr = menuid.split(",")
        var test = [];

        for (let m of marr) {
            var narr = menu.find(obj => obj.mid == m);

            test.push(narr)
        }

        return test;
    }

    const orderstatus = async (oid, tid) => {
        setOrdersts({ order: oid, table: tid })
    }

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'Bill',
        onAfterPrint: () => alert('Bill Downloaded Successfully'),
    });

    const selectRecord = (val) => {
        setSelectedRecord(val);

        console.log(val)
        // Delay to ensure the ref is updated before printing
        setTimeout(() => handlePrint(), 0);
    };



    return (
        <>
            <section className='row'>
                <section className='col-md-12 table-responsive'>
                    <table className='table table-bordered w-100 table-dark' align='center'>
                        <thead>
                            <tr>
                                <th>User</th>
                                <th><center>Menu</center></th>
                                <th>Table Name</th>
                                <th>Order Status</th>
                                <th>Action</th>
                                <th>Bill</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                placeorder.map((v, k) => {
                                    const qnt = v.quantity.split(',')
                                    var menu1 = allmenu(v[2])
                                    return (
                                        <tr>
                                            <td>{v.name}</td>
                                            <td>


                                                <table className='table table-hover'>
                                                    <thead>
                                                        <tr>
                                                            <th className='text-info'>Name</th>
                                                            <th className='text-info'>Price</th>
                                                            <th className='text-info'>Info</th>
                                                            <th className='text-info'>Quantity</th>
                                                            <th className='text-info'>Total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>


                                                        {
                                                            menu1.map((val, k) => {
                                                                const qt = qnt[k]
                                                                return (
                                                                    <tr>
                                                                        <th className='text-success'>{val.mname}</th>
                                                                        <th className='text-danger'>{val.price} ₹</th>
                                                                        <th className='text-success'>{val.info}</th>
                                                                        <th className='text-primary'>{qt}</th>
                                                                        <th className='text-danger'>{val.price * qt} ₹</th>
                                                                    </tr>
                                                                )
                                                            })
                                                        }
                                                    </tbody>
                                                </table>

                                            </td>
                                            <td>{v.title}</td>
                                            <td>
                                                <button onClick={() => orderstatus(v.oid, v.tid)} data-bs-target='#box' data-bs-toggle='modal' className='btn btn-outline-danger btn-rounded'>{placeorder[k][5]}</button>
                                            </td>
                                            <td>
                                                <button onClick={() => delrec(v.tid, v[0])} className='btn btn-outline-danger btn-rounded'>Delete Order</button>
                                            </td>
                                            <td>
                                                <button onClick={() => selectRecord({ "all": v, "menu": menu1 })} className='btn btn-outline-info btn-rounded'>Print</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    {
                    selectedRecord && (<PrintableRecord ref={componentRef} record={selectedRecord} />)
                    }
                </section>
            </section>

            <section className='modal' id='box' data-bs-backdrop='static'>
                <section className='modal-dialog'>
                    <section className='modal-content bg-dark'>
                        <section className='modal-header fs-3 fw-bold text-light'>Order Status<span data-bs-dismiss='modal' className='btn btn-close'></span></section>
                        <section className='modal-body p-3'>
                            <form method='post' onSubmit={handleSubmit(getdata)}>
                                <textarea {...register("orderstatus")} rows={6} className='form-control rounded' placeholder='Enter Order Status'></textarea>
                                <section className='modal-footer justify-content-center'>
                                    <button data-bs-dismiss='modal' type='submit' className='btn btn-outline-warning btn-rounded'>Update Order Status</button>
                                </section>
                            </form>
                        </section>
                    </section>
                </section>
            </section>

        </>
    )
}

export default Vieworders