import React from 'react'
import "../BestSeller/bestseller.scss"
import {useNavigate } from "react-router-dom"


function Bestseller({products,loading}) {
    const navigate = useNavigate()
const cards =loading ?
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
products?.map((product) => (
    <div className="bestseller-card" key={product?.id} id={product?.id} onClick={() => {
        navigate(`/Detail/${product?.id}`)
    }}>
        <div className="img-area">
        <img src={product?.image?.url} alt="" />

        </div> 
        <h1>{product?.name}</h1>
        <div className="price-area">
            <p className="price">{product?.price?.raw} $</p>
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

export default Bestseller