import { useEffect, useState } from 'react'
import { getBasket } from '../store/Reducer/Basketreducer'
import { useSelector, useDispatch } from 'react-redux'

const useBasket = () => {
    const [cartId, setCartId] = useState()
    const [count ,setCount] = useState(0)
    const { productsBas, loadingBas } = useSelector((state) => state.Basket)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBasket())
    }, [dispatch, cartId, count])

    return [setCartId, productsBas, loadingBas, cartId, setCount, count]
}  

export default useBasket