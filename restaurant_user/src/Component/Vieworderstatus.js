import axios from 'axios'
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function Vieworderstatus() {

    const [order, setOrder] = useState([])
    const [menu, setMenu] = useState([])

    const orderstatus = async () => {
        var usid = window.sessionStorage.getItem("userid")
        const obj = { uid: usid }
        const res = await axios.post("http://tasty.000.pe/API/viewplaceorder.php", JSON.stringify(obj))
        setOrder(res.data.Result)
        setMenu(res.data.Menu)
    }

    useEffect(() => {
        orderstatus()
    },[])

    const allmenu = (menuid) => {
        var marr = menuid.split(",")
        var test = [];
        
        for (let m of marr) {
            var narr = menu.find(obj => obj.mid == m);
            test.push(narr)
        }
        
        return test;
    }

    return (
        <div className='container mt-5'>
            <div className='table-responsive'>
                <table className='table table-striped table-hover table-bordered'>
                    <thead className='table-dark'>
                        <tr>
                            <th>Name</th>
                            <th><center>Menu</center></th>
                            <th>Table Name</th>
                            <th>Order Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            order.map((v, k) => {
                                const qnt = v.quantity.split(',')
                                var menu1 = allmenu(v[2])
                                return (
                                    <tr key={k}>
                                        <td>{v.name}</td>
                                        <td>
                                            <div className='table-responsive'>
                                                <table className='table table-hover'>
                                                    <thead className='table-secondary'>
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
                                                                    <tr key={k}>
                                                                        <td className='text-success'>{val.mname}</td>
                                                                        <td className='text-danger'>{val.price} ₹</td>
                                                                        <td className='text-success'>{val.info}</td>
                                                                        <td className='text-primary'>{qt}</td>
                                                                        <td className='text-danger'>{val.price * qt} ₹</td>
                                                                    </tr>
                                                                )
                                                            })
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </td>
                                        <td>{v.title}</td>
                                        <td>
                                            <button className='btn btn-outline-success'>{order[k][5]}</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Vieworderstatus
