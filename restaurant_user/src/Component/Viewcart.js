import React, { useEffect, useState } from 'react'
import Emptycart from './Emptycart'
import axios from 'axios';

function Viewcart() {

  var midarr =[];
  var qtarr = [];

  const [cart, setCart] = useState([])

  const viewcart = () => {
    const row = JSON.parse(window.sessionStorage.getItem("menu")) || []
    setCart(row)
  }

  useEffect(() => {
    viewcart()
  },[])

  const handleQuantityChange = (event, itemId) => {
    const newQuantity = parseInt(event.target.value, 10);
    setCart(cart.map(item => item.mid === itemId ? { ...item, quantity: newQuantity } : item));
  };

  const removecart = (mid) => {
    var rmcrt = JSON.parse(window.sessionStorage.getItem("menu")) || [];
    rmcrt = rmcrt.filter(item => item.mid != mid);
    window.sessionStorage.setItem("menu", JSON.stringify(rmcrt))
    alert('Item Removed')
    viewcart()
  }

  const placeorder = async () => 
  {
    const menuid = JSON.parse(window.sessionStorage.getItem("menu"));
    const stusid = window.sessionStorage.getItem("userid") || false;
      console.log(stusid)
    
    for(var val of menuid)
    {
      midarr.push(val.mid)
    }
    
    var midcombination = midarr.join(",")
    console.log(midcombination)

    for(var val1 of cart)
    {
      qtarr.push(val1.quantity)
    }

    var qtcombination= qtarr.join(",")
    console.log(qtcombination)

    const obj = {uid:stusid, mid:midcombination, qtid:qtcombination}
    const res = await axios.post("http://tasty.000.pe/API/placeorder.php", JSON.stringify(obj))
    alert(res.data["Result"])
    
    if(res.data["Result"]=="Your Order Placed Successfully")
    {
      window.sessionStorage.removeItem("menu")
    }
    
    viewcart()

  }

  return (
    <>
      <div className='container mt-2'>
        {
          cart.length > 0 ?
            <div className="container mt-2">

              <div class="container mt-5">
                <div class="card shadow-sm">
                  <div class="card-header bg-primary text-white"><h2 class="mb-0">Your Cart</h2></div>
                  <div className='card-body'>
                    <div className='row'>
                      <div className='col-md-12 table-responsive'>

                        <div class="card-body">
                          <table class="table table-bordered table-hover text-center">
                            <thead class="table-dark">
                              <tr>
                                <th>Srno</th>
                                <th>Category</th>
                                <th>Name</th>
                                <th>Photo</th>
                                <th>Price</th>
                                <th>Qut</th>
                                <th>Total</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>

                              {
                                cart.map((v, k) => {
                                  var url = "http://tasty.000.pe/API/Upload/" + v.photo;
                                  const total = v.price * v.quantity;
                                  return (
                                    <tr key={v.mid}>
                                      <td>{k + 1}</td>
                                      <td>{v.ctname}</td>
                                      <td>{v.mname}</td>
                                      <td><img height={100} width={100} src={url} style={{ objectFit: 'cover' }}></img></td>
                                      <td>{v.price} ₹</td>

                                      <td>
                                        <input type='number'
                                          style={{ width: '30px', appearance: 'none' }}
                                          defaultValue={v.quantity}
                                          onChange={(event) => handleQuantityChange(event, v.mid)}
                                          min="1"
                                        ></input>
                                      </td>
                                      <td>{total.toFixed(2)} ₹</td>
                                      <td><button onClick={() => removecart(v.mid)} className='btn btn-outline-danger'>Remove</button></td>
                                    </tr>
                                  )
                                })
                              }

                            </tbody>
                            <tfoot>
                              <tr>
                                <th className='text-end' colSpan={7}>Total Amount : </th>
                                <th className='text-end'>{cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)} ₹</th>
                              </tr>
                              <tr>
                                <th colSpan={8}><button onClick={() => placeorder()} className='btn btn-outline-primary rounded-0 text-end'>Place Order</button></th>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> : <Emptycart></Emptycart>
        }
      </div>
    </>
  )
}

export default Viewcart