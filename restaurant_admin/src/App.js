import React from 'react'
import Dashboard from "./Component/Dashboard";
import { Route, Routes, useNavigate } from 'react-router-dom';
import Addcategory from './Component/Addcategory';
import Viewcategory from './Component/Viewcategory';
import Adminlogin from './Component/Adminlogin';
import Error from './Component/Error';
import Addmenu from './Component/Addmenu';
import Viewmenu from './Component/Viewmenu';
import Addtable from './Component/Addtable';
import Viewtable from './Component/Viewtable';
import Manageuser from './Component/Manageuser';
import Vieworders from './Component/Vieworders';
import Contactus from './Component/Contactus';

function App() {

  var stid = window.sessionStorage.getItem("adminid") || false;

  const nav = useNavigate()

  return (
    <Routes>
      
      <Route path='/' element={<Adminlogin></Adminlogin>}></Route>
      <Route path='/dashboard' element={stid ? <Dashboard></Dashboard> : <Error></Error>}>
        <Route path='addcategory' element={<Addcategory></Addcategory>}></Route>
        <Route path='viewcategory' element={<Viewcategory></Viewcategory>}></Route>
        <Route path='addmenu' element={<Addmenu></Addmenu>}></Route>
        <Route path='viewmenu' element={<Viewmenu></Viewmenu>}></Route>
        <Route path='addtable' element={<Addtable></Addtable>}></Route>
        <Route path='viewtable' element={<Viewtable></Viewtable>}></Route>
        <Route path='manageuser' element={<Manageuser></Manageuser>}></Route>
        <Route path='vieworders/:userid' element={<Vieworders></Vieworders>}></Route>
        <Route path='contactus' element={<Contactus></Contactus>}></Route>
      </Route>
    </Routes>
  )
}

export default App