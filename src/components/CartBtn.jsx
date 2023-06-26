import React from 'react'
import { Link } from 'react-router-dom'

const CartBtn = () => {
  return (
    <>
        <Link to='/cart' className='btn btn-outline-primary ms-2'>
            <span className='fa fa-shopping-cart'>Cart (0)</span>
        </Link>
    </>
  )
}

export default CartBtn