import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const CartBtn = () => {
  const storeState = useSelector((state=>state.addItems))
  // console.log('state--->',storeState)
  return (
    <>
        <Link to='/cart' className='btn btn-primary me-2'>
            <span className='fa fa-shopping-cart'>Cart ({storeState.length})</span>
        </Link>
    </>
  )
}

export default CartBtn