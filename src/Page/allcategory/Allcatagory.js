import { Link } from "react-router-dom"
import "./allcatagory.scss"
import arrow from "../../images/chevronright.svg"


import Allcategoryswiper from "../allcategory/Allcategoryswiper"

import { useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import { getAllphones } from "../../store/Reducer/Phonesreducer"
import { getSamsung } from "../../store/Reducer/Samsungreducer"
import {getiphone} from "../../store/Reducer/Applereducer"

import loadingimg from "../../images/loadingbest.gif"
import { useState } from "react"
import minus from "../../images/minus.svg"
import pilus from "../../images/pilus.svg"
import chevronleft from "../../images/chevronleft.svg"
import chevronright from "../../images/chevron-right.svg"

function Allcatagory() {

    const { phoneproducts, phoneloading } = useSelector((state) => state.allphones)
    const dispatch3 = useDispatch() 

    
     const {
         samsungproduct,
         samsungloading
     } = useSelector((state) => state.allsamsung,
     )
     const {appleproduct,appleloading} = useSelector((state) => state.alliphone)
    const dispatch = useDispatch()
    const dispatch2 = useDispatch()

    useEffect(() => {
        dispatch3(getAllphones())
    }, [])
       useEffect(() => {
           dispatch(getSamsung())
       }, [])
    useEffect(() => {
        dispatch2(getiphone())
    }, [])

    console.log(phoneproducts);


    const [toogle, setToogle] = useState(false)
    const [click, setClick] = useState(true)
    const [click1, setClick1] = useState(true)
    const [click2 , setClick2] = useState(true)
 

console.log(click);
    return (
        phoneloading ? < div className="loading-container-main" >
            <img className='loading' src={loadingimg} alt="" />

        </div> :
            <div className="container">
                <Link className='link' to="/">  Ana sehife  <img src={arrow} alt="" /> {phoneproducts?.[0]?.categories?.[1]?.name}</Link>
                <div className='main-area'>



                    <div className="part-1">
                        <div className="brend-container">

                            <div className="brend-area" onClick={() => { setToogle(!toogle) }}>
                                <h3>Brend</h3>

                                {toogle ? <img src={minus} alt="" /> : <img src={pilus} alt="" />}

                            </div>
                            <h5>{phoneproducts.length} Məhsul tapıldı</h5>

                        </div>

                        {toogle ? <div className="brend-content1">


                            <ul className="brend-ul">
                                <li>
                                    <input type="checkbox" name="" id=""  onClick={() => { setClick2(!click) }}/>
                                    <label htmlFor="" >Apple</label>
                                </li>
                                <li>
                                    <input type="checkbox" name="" id="" onClick={() => { setClick1(!click1) }}/>
                                    <label htmlFor="" >Samsung</label>

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






                    < Allcategoryswiper phoneproducts = {
                        phoneproducts
                    }
                    phoneloading = {
                        phoneloading
                    }
                    click = {
                        click
                    }
                    setClick = {
                        setClick
                    }
                    click1 = {
                        click1
                    }
                      setClick1 = {
                          setClick1
                      }
                         click2 = {
                             click2
                         }
                         setClick2 = {
                             setClick2
                         }
                    samsungproduct = {
                        samsungproduct
                    }
                    samsungloading = {
                        samsungloading
                    }
                    appleproduct = {
                        appleproduct
                    }
                    appleloading = {
                        appleloading
                    }
                    />




                </div>
                <div className="slick-area" style={{display: click1 ? 'flex' : 'none' }}>
                    <button className= "left-arrow circledetailes "><img src={chevronleft} alt="" onClick={() => {setClick(true)}} /></button>
                    <button className="right-arrow circledetailes" ><img src={chevronright} alt="" onClick={() => {setClick(false)}} /></button>

                </div>

            </div>
    )
}

export default Allcatagory
