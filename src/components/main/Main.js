import React,{useEffect} from 'react'

import "../main/main.scss"
import Slider from "../main/Slider/Slider"
import BestSeller from "./BestSeller/Bestseller"
import arrow from "../../images/arrow.svg"
import Airtag from "./Airtag/Airtag"
import Category from './Category/Category'
import Adventage from "./adventage/Adventage"
import Marca from "../main/marcaslider/Marcaslider"
import Accessories from '../../Page/Accessories/Accessories'
import {getAllProducts} from "../../store/Reducer/Fetchreducer"
import {getAllCategories} from "../../store/Reducer/categoriesreducer"
import {getAllphones} from "../../store/Reducer/Phonesreducer"
import {useSelector,useDispatch} from "react-redux"
// import Allcategory from "../allcategory/Allcatagory"
import { Link } from "react-router-dom"




function Main() {
     const { products, loading } = useSelector((state) => state.products)
      const dispatch = useDispatch()
 


    useEffect(() => {
        dispatch(getAllProducts())
    }, [])


    const {products1,loading1} = useSelector((state) => state.categories)
    const dispatch1 = useDispatch()


    useEffect(() => {
        dispatch1(getAllCategories())
    }, [])


    



    return (

        <>
        
            <Slider />
            <div className="all-cards">
                <h1>Ən Çox Satılan Məhsullar</h1>
                <div className="atags">

                    {/* <a href={Allcategory}>Hamsına bax</a> */}
                    <Link to="Allcatagory">Hamsina bax</Link>
                    <img src={arrow} alt="" />

                </div>
            </div>
            <BestSeller  products={products} loading={loading}/>
            <div className="new-cards">
                <h1>Yeni Gələn Məhsullar</h1>
                <div className="atags">

                    <Link to="Allcatagory">Hamsına bax</Link>
                    <img src={arrow} alt="" />

                </div>
            </div>

            < BestSeller products={products} loading={loading}/>
            <Airtag/>
               <div className="new-cards">
                <h1>Yeni Gələn Aksesuarlar</h1>
                <div className="atags">

                    <Link to="Allaccessories">Hamsına bax</Link>
                    <img src={arrow} alt="" />

                </div>
            </div>
            < Accessories products1={products1} loading1={loading1}/>
            < Category/>
            < Adventage/>
            < Marca/>
   


        </>
    );


}

export default Main