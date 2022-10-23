import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ShoppingCart from "../../../images/shopping-cart.svg"
import Delete from "../../../images/delete.svg"
import azn from "../../../images/azn.svg"
import total1 from "../../../images/total.svg"
import { useNavigate } from 'react-router-dom'
import { commerce } from '../../../Commerce'
import { updateBasket, removeFromBasket, removeBasket, deleteBasketItem } from '../../../store/Reducer/Basketreducer'
import { useDispatch, useSelector } from 'react-redux'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const BasketMain = () => {
    const [hover, setHover] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { productsBas } = useSelector((state) => state.Basket)

    const updatedQuantity = (type, quantity, line_item_id) => {
        if (type === 'inc') {
            quantity = quantity + 1
          
        } else {
            quantity = quantity - 1
        }

        dispatch(updateBasket({
            quantity,
            basket_id: localStorage.getItem('Basket_id'),
            line_item_id
        }))
    }

    // const notify = () => toast.success("Məhsul uğurla silindi", {
    //     position: toast.POSITION.TOP_RIGHT
    // });

    function deleteBasket(id) {
        // console.log(id);
        dispatch(deleteBasketItem({
            basket_id: localStorage?.getItem('Basket_id'),
            line_item_id: id
        }))
        // dispatch(removeFromBasket(id))
        // notify()
    }

    const total = productsBas?.map((money) => money?.line_total?.raw)

    function mouseHover() {
        setHover(true)
    }

    // console.log(productsBas);

    return (
        <>
            {productsBas?.length === 0 ?
                <div className='basket_parent_area'>
                    <div className="basket_img_button_area">
                        <img src={ShoppingCart} alt="Cart" />
                        <h3 className="sebet_about">Səbətiniz halhazırda boşdur</h3>
                        <Link to={"/"}>
                            <button className="go_shopping_button">
                                Alış-verişə davam et
                            </button>
                        </Link>
                    </div>
                </div> :
                <div className='basket_parent_area_pr'>
                    <div className="basket_area_col">
                        {productsBas?.map((product) => (
                            <div key={product?.id} id={product?.id} className="basket_product_area">
                                <div onClick={() => {
                                    navigate(`/Detail/${product?.product_id}`)
                                }} className="basket_product_img">
                                    <img src={product?.image?.url} alt="product_img" />
                                </div>
                                <div className="basket_product_about">
                                    <h3 className="product_name">{product?.name}</h3>
                                    <div className="row">
                                        <div className="color_and_size">

                                            {product?.selected_options.length > 0 ? <><h3 className="color"><span>Rəng: </span>{product?.selected_options?.[1]?.option_name}</h3>
                                                <h3 className="size"><span>Yaddaş: </span>{product?.selected_options?.[0]?.option_name}</h3></> : null}

                                            {product?.selected_options.length > 0 ? <h3 className="price">{product?.selected_options?.[0]?.price?.raw} $</h3> : <h3 className="price">{product?.price?.raw} $</h3>}
                                        </div>
                                    </div>
                                </div>
                               <div className="flexEnd">
                                    <div className="product_number area">
                                        {product?.quantity === 1 ?
                                            <div onMouseOver={mouseHover} className="product_minus num product_handler not_work">-</div> :
                                            <div onMouseOver={mouseHover} onClick={() => { 
                                                updatedQuantity('desc', product.quantity, product.id)
                                                window.scrollTo(0,0)
                                             }} className="product_minus num product_handler">-</div>}
                                        <div className="product_count num">{product.quantity}</div> 
                                        <div onClick={() => { 
                                            updatedQuantity('inc', product.quantity, product.id)
                                            window.scrollTo(0,0)
                                         }} className="product_plus num product_handler">+</div>
                                    </div>
                                    <div onClick={() => {
                                        deleteBasket(product?.id)
                                        window.scrollTo(0,0)
                                    }} className="delete_button">
                                        <img src={Delete} alt="delete" />
                                    </div>
                               </div>
                            </div>
                        ))}
                    </div>
                    <div className="checkout_area">
                        <h3 className="all">Ümumi</h3>
                        <div className="all_expense_area">
                            <h3 className="all_expense">Məbləğ</h3>
                            <h3 className="money">{
                                total?.reduce((a, b) => a + b)
                            } $</h3>
                        </div>
                        <div className="all_expense_area">
                            <h3 className="all_expense">Çatdırılma</h3>
                            <h3 className="money">0 $</h3>
                        </div>
                        <div className="all_expense_area">
                            <h3 className="all_expense">Hədiyyə </h3>
                            <h3 className="money">0 $</h3>
                        </div>
                        <div className="all_expense_area">
                            <h3 className="all_expense">Promo </h3>
                            <h3 className="money">0 $</h3>
                        </div>
                        <div className="all_expense_area">
                            <h3 className="all_expense">Cəmi</h3>
                            <h3 className="money total">{total?.reduce((a, b) => a + b)} $</h3>
                        </div>
                    </div>
                </div>}
          
        </>
    )
}

export default BasketMain