import { Route, Routes, useLocation } from "react-router-dom";
import Banner from "./Component/Banner";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Slider from "./Component/Slider";
import Movetotop from "./Component/Movetotop";
import Copyright from "./Copyright";
import Registration from "./Component/Registration";
import Bgbanner from "./Component/Bgbanner"
import Login from "./Component/Login";
import Ourspecials from "./Component/Ourspecials";
import Twogrid from "./Component/Twogrid";
import Services from "./Component/Services";
import Userprofile from "./Component/Userprofile";
import Error from "./Component/Error";
import Tablebooking from "./Component/Tablebooking";
import Viewcart from "./Component/Viewcart";
import Emptycart from "./Component/Emptycart";
import Alreadylogin from "./Component/Alreadylogin";
import Alreadyregister from "./Component/Alreadyregister";
import Contactus from "./Component/Contactus"
import Vieworderstatus from "./Component/Vieworderstatus";


function App() {

  
  var stusid = window.sessionStorage.getItem("userid") || false;

  const loc = useLocation() 

  return (
    <>
      <Header></Header>
      {
        loc.pathname == '/' ? <Banner></Banner> : <Bgbanner></Bgbanner>
      }
      {
        loc.pathname == '/' ? <Twogrid></Twogrid> :""
      }
      
      <Routes>
        <Route path="/vieworderstatus" element={stusid ?<Vieworderstatus></Vieworderstatus>:<Error></Error>}></Route>
        <Route path="/contactus" element={<Contactus></Contactus>}></Route>
        <Route path="/emptycart" element={stusid ?<Emptycart></Emptycart>:<Error></Error>}></Route>
        <Route path="/viewcart" element={stusid ? <Viewcart></Viewcart> : <Error></Error>}></Route>
        <Route path="/tablebooking" element={stusid ?<Tablebooking></Tablebooking>:<Error></Error>}></Route>
        <Route path="/aboutus" element={<Services></Services>}></Route>
        <Route path="/menu" element={<Ourspecials></Ourspecials>}></Route>
        <Route path="/registration" element={stusid ? <Alreadyregister></Alreadyregister> : <Registration></Registration>}></Route>
        <Route path="/login" element={stusid ? <Alreadylogin></Alreadylogin> :<Login></Login>}></Route>
        <Route path="/userprofile" element={ stusid ?<Userprofile></Userprofile> : <Error></Error>}></Route>
      </Routes>

      

      {
        stusid ==""  ? 
        <>
        <Slider></Slider>
        </> :

        <>
        <Slider></Slider>
        </>
         
      }
      <Footer></Footer>
      <Copyright></Copyright>
      <Movetotop></Movetotop>
    </>
  );
}

export default App;
