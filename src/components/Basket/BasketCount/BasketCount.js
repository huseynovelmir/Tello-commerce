import React from 'react'

const BasketCount = ({ products }) => {
  return (
    <div className='basket_count_area'>
      <h1 className="basket_count">Səbət ({products?.length} məhsul)</h1>
    </div>
  )
}

export default BasketCount