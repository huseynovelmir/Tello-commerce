import { Link } from "react-router-dom"
import "../allcategory/allcatagory.scss"
import arrow from "../../images/chevronright.svg"


import Allaccessoriesswiper from "../Allaccessories/Allaccessoriesswiper"

import { useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import {getAllCategories} from "../../store/Reducer/categoriesreducer"


import loadingimg from "../../images/loadingbest.gif"
import { useState } from "react"
import minus from "../../images/minus.svg"
import pilus from "../../images/pilus.svg"
import chevronleft from "../../images/chevronleft.svg"
import chevronright from "../../images/chevron-right.svg"
function Allaccessories() {



    const [toogle, setToogle] = useState(false)
    const [click, setClick] = useState(true)
 

// console.log(products1);

    const {products1,loading1} = useSelector((state) => state.categories)
    const dispatch1 = useDispatch()


    useEffect(() => {
        dispatch1(getAllCategories())
    }, [])

    console.log(products1);
    
    return (
        loading1 ? < div className = "loading-container-main" >
            <img className='loading' src={loadingimg} alt="" />

        </div> :
            <div className="container">
                <Link className='link' to="/">  Ana sehife  <img src={arrow} alt="" /> {products1?.[0]?.categories?.[0]?.name}</Link>
                <div className='main-area'>



                    <div className="part-1">
                        <div className="brend-container">

                            <div className="brend-area" onClick={() => { setToogle(!toogle) }}>
                                <h3>Brend</h3>

                                {toogle ? <img src={minus} alt="" /> : <img src={pilus} alt="" />}

                            </div>
                            <h5>{products1.length / 2} Məhsul tapıldı</h5>

                        </div>

                        {toogle ? <div className="brend-content1">


                            <ul className="brend-ul">
                                <li>
                                    <input type="checkbox" name="" id="" />
                                    <label htmlFor="">Apple</label>
                                </li>
                                <li>
                                    <input type="checkbox" name="" id="" />
                                    <label htmlFor="">Samsung</label>

                                </li>
                                <li>
                                    <input type="checkbox" name="" id="" />
                                    <label htmlFor="">Xiaomi</label>
                                    <span className="checkmark"></span>
                                </li>
                                <li>
                                    <input type="checkbox" name="" id="" />
                                    <label htmlFor="">Honor</label>
                                </li>

                            </ul>
                        </div> : ""}
                    </div>






                    < Allaccessoriesswiper
                    products1 = {
                        products1
                    }
                    loading1 = {
                        loading1
                    }
                    click = {
                        click
                    }
                    setClick = {
                        setClick
                    }
                    />




                </div>
                <div className="slick-area">
                    <button className= "left-arrow circledetailes "><img src={chevronleft} alt="" onClick={() => {setClick(true)}} /></button>
                    <button className="right-arrow circledetailes" ><img src={chevronright} alt="" onClick={() => {setClick(false)}} /></button>

                </div>

            </div>
    )
}

export default Allaccessories
