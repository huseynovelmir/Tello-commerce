import Header from "./components/Header/header";
import Main from "./components/main/Main"
import {
  commerce
} from "./Commerce"
import {
  Routes,
  Route
} from "react-router-dom"
import Footer from "./components/main/footer/Footer"

import Detail from "./Page/details/Detail";
import Allcatagory from "./Page/allcategory/Allcatagory";

import Allaccessories from "./Page/Allaccessories/Allaccessories";
import Allwatch from "./Page/Allwatch/Allwatch"
import Allsamsung from "./Page/Allsamsung/Allsamsung"
import Allapple from "./Page/Allapple/Allapple"
import Allxiomio from "./Page/Allxiomio/Allxiomio";
import Allhonor from "./Page/Allhonor/Allhonor";
import Element from "./Page/Allelement/Element";
import Qulaqciq from "./Page/Allqulaqciq/Allqulaqciq";
import Alljbl from "./Page/Alljbl/Alljbl";
import Allbeats from "./Page/Allbeats/Allbeats";
import Allsony from "./Page/Allsony/Allsony";
import Allqcy from "./Page/Allqcy/Allqcy";
import Allapplewatch from "./Page/Allapplewatch/Applewatch";
import Allsamsungwatch from "./Page/Allsamsungwatch/Allsamsungwatch";
import Allband from "./Page/Allband/Allband";
import Allairtag from "./Page/AllAirtag/Allairtag";
import Basket from "./components/Basket/Basket";
import Login from "./Page/Auth/Login/Login";
import {useState} from "react"
import Register from "./Page/Auth/Register/Register";
import Filter from "./Page/Products/Filter/Filter";

function App() {
 
  return (

    <div className = "App" >
    <Header />
    <Routes >
    <Route path = "/" element = {< Main/>}/>
   
     <Route path = "Detail/:id" element = {<Detail />}/> 
     <Route path = "Allcatagory" element = {<Allcatagory />}/> 
     <Route path = "Allaccessories" element = {<Allaccessories />}/> 
     <Route path = "Allwatch" element = {<Allwatch/> }/>
     <Route path = "Allsamsung" element = {<Allsamsung/> }/>
     <Route path = "Allapple" element = {<Allapple/> }/>
     <Route path = "Allxiomio" element = {<Allxiomio/> }/>
     <Route path = "Allhonor" element = {<Allhonor/> }/>
     <Route path = "Element" element = {<Element/> }/>
     <Route path = "Qulaqciq" element = {<Qulaqciq/> }/>
     <Route path = "Alljbl" element = {<Alljbl/> }/>
     <Route path = "Allbeats" element = {<Allbeats/> }/>
     <Route path = "Allsony" element = {<Allsony/> }/>
     <Route path = "Allqcy" element = {<Allqcy/> }/>
     <Route path = "Allsamsungwatch" element = {<Allsamsungwatch/> }/>
     <Route path = "Allapplewatch" element = {<Allapplewatch/> }/>
     <Route path = "Allband" element = {<Allband/> }/>
     <Route path = "Allairtag" element = {<Allairtag/> }/>
     <Route path = "Basket" element = {<Basket/> }/>
     <Route path = "Login" element = {<Login/> }/>
     <Route path = "Register" element = {<Register/> }/>
     <Route path = "Filter" element = {<Filter/> }/>
     
   





    </Routes>
     <Footer/>


    </div>
  );
}
export default App;