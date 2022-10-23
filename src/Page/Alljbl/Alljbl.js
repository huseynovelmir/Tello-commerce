import { Link } from "react-router-dom"
import "../allcategory/allcatagory.scss"
import arrow from "../../images/chevronright.svg"



import { useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import { getAlljbl } from "../../store/Reducer/AllJblreducer"

import loadingimg from "../../images/loadingbest.gif"
import { useState } from "react"
import minus from "../../images/minus.svg"
import pilus from "../../images/pilus.svg"
import chevronleft from "../../images/chevronleft.svg"
import chevronright from "../../images/chevron-right.svg"
import Alljblswiper from "./Alljblswiper"
function Alljbl() {

    const {
        jblproducts,
        jblloading
    } = useSelector((state) => state.alljbl)
    const dispatch3 = useDispatch()


    useEffect(() => {
        dispatch3(getAlljbl())
    }, [])

console.log(jblproducts);
console.log("hahahahahah");

    const [toogle, setToogle] = useState(false)
    const [click, setClick] = useState(true)
 

console.log(click);
    return (
        jblloading ? < div className = "loading-container-main" >
            <img className='loading' src={loadingimg} alt="" />

        </div> :
            <div className="container">
                <Link className='link' to="/">  Ana sehife  <img src={arrow} alt="" /> {jblproducts?.[0]?.categories?.[2]?.name}</Link>
                <div className='main-area'>



                    <div className="part-1">
                        <div className="brend-container">

                            <div className="brend-area" onClick={() => { setToogle(!toogle) }}>
                                <h3>Brend</h3>

                                {toogle ? <img src={minus} alt="" /> : <img src={pilus} alt="" />}

                            </div>
                            <h5>{jblproducts.length} Məhsul tapıldı</h5>

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






                    < Alljblswiper jblproducts = {
jblproducts
                    }
                    jblloading = {
                        jblloading
                    }
                    click = {
                        click
                    }
                    setClick = {
                        setClick
                    }
                    />




                </div>
                {/* <div className="slick-area">
                    <button className= "left-arrow circledetailes "><img src={chevronleft} alt="" onClick={() => {setClick(true)}} /></button>
                    <button className="right-arrow circledetailes" ><img src={chevronright} alt="" onClick={() => {setClick(false)}} /></button>

                </div> */}

            </div>
    )
}

export default Alljbl
