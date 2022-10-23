import React from 'react'
import "../Accessories/accessories.scss"
import {useNavigate } from "react-router-dom"


function Accessories({
  products1,
  loading1
}) {
    const navigate = useNavigate()
const cards = loading1 ?
<>
              <div className="card is-loading">
                <div className="image"></div>
                <div className="content">
                  <h2></h2>
                  <p></p>
                </div>
              </div>

              <div className="card is-loading">
                <div className="image"></div>
                <div className="content">
                  <h2></h2>
                  <p></p>
                </div>
              </div>

              <div className="card is-loading">
                <div className="image"></div>
                <div className="content">
                  <h2></h2>
                  <p></p>
                </div>
              </div>
              
                <div className="card is-loading">
                <div className="image"></div>
                <div className="content">
                  <h2></h2>
                  <p></p>
                </div>
              </div>
               

</>

:
products1?.map((product1) => (
    <div className="bestseller-card" key={product1?.id} id={product1?.id} onClick={() => {
        navigate(`/Detail/${product1?.id}`)
    }}>
        <div className="img-area">
        <img src={product1?.image?.url} alt="" />

        </div>
        <h1>{product1?.name}</h1>
        <div className="price-area">
            <p className="price">{product1?.price?.raw} $</p>
        </div>
    </div>
))


    return (

        <>


            <div className="bestsellers">

                {cards}
          

            </div>
        </>
    )
}

export default Accessories