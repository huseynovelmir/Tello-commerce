import { Link } from "react-router-dom"
import "./detail.scss"
import arrow from "../../images/chevronright.svg"

import Swiper from "../details/Detailslider"
import { useParams } from "react-router-dom"
import { useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import { getProduct } from "../../store/Reducer/detailreducer"
import loadingimg from "../../images/loadingbest.gif"
import { useState } from "react"
import araba from "../../images/sebet.svg"  
import stars from "../../images/stars.svg"
import { commerce } from '../../Commerce'
import useBasket from "../../hooks/useBakset"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Detail() {
  const params = useParams()
  const id = params
  const dispatch = useDispatch()
  const { product, loading } = useSelector((state) => state.detail)
  const [setCartId, productsBas, loadingBas, cartId, setCount1, count1] = useBasket()

  useEffect(() => {
    dispatch(getProduct(id))
  }, [dispatch, id])

  const notify = () => toast.success("Məhsul səbətə əlavə olundu");
  const [count, setCount] = useState(1);
  // nxcvskjdnvkjdvkjsbvdkjsbdkvjsbdkvjbsdkvjbsdkvjbsdkvjbskdvjbskjdvbv/

   async function AddBasket() {
    console.log(id);
        const Basket = await commerce.cart.add(id, count)
        setCount1(count)
        console.log(Basket);
        setCartId(Basket?.id)
        notify()
        localStorage.setItem("Basket_id", Basket?.id)
        return Basket
    }
  // nxcvskjdnvkjdvkjsbvdkjsbdkvjsbdkvjbsdkvjbsdkvjbsdkvjbskdvjbskjdvbv/

  return (
    loading ? <div className="loading-container-main">
      <img className='loading' src={loadingimg} alt="" />
    </div> :
      <div className='main-area'>
         <Link className='link' to="/">  Ana sehife  <img src={arrow} alt="" /> {product?.categories?.[0]?.name}</Link>
         <div className="detail-container">

          <div className="img-area">
            <Swiper product={product} loading={loading} />
          </div>

          <div className="detail-area">

            <h3>{product?.name}</h3>
            <p>{product?.price?.raw} $</p>
            <div className="hr"></div>
            <div className="stars">
              <img src={stars} alt="" />
              <div className="comment-divs">
             <a href="#">234 comment</a>

        

              </div>

            </div>
            <div className="hr"></div>
         
            <div className="hr"></div>

            <div className="count-area">
              <button className="incriment count" onClick={() => setCount(count -1)} disabled={count === 1}>-</button>
              <p className="count-tag">{count}</p>
              <button className="decriment count" onClick={() => setCount(count + 1)}  >+</button>
              <button className="reset" onClick={() => setCount(1)} disabled={count === 1}>Reset</button>
            </div>
          <button onClick={AddBasket} className="sebet"> <img src={araba} alt=""/> Səbətə at</button>

          </div>

        </div>
      <ToastContainer />
      </div>
  )
}

export default Detail
