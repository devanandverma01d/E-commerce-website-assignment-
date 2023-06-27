import React from 'react'
import {delItem} from '../redux/actions/index'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
const Cart = () => {
    const storeState = useSelector((state=>state.addItems))
    console.log('storeState--->',storeState)
    const dispatch = useDispatch()

    const handleDel=(item)=>{
        dispatch(delItem(item))

    }



    const cartItems=(cartItem)=>{
        return(
            <div className='px-4 my-5 bg-light rounded-3' key={cartItem.id}>
                <div className='container py-4'>
                    <button onClick={()=>handleDel(cartItem)} className="btn-close float-end"></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItem.image} alt={cartItem.title}  height="200px" width='180px'/>
                        </div>
                        <div className="col-md-4">
                            <h3>{cartItem.title}</h3>
                            <p className='lead fw-bold '>Price: ${cartItems.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    const emptyCart=()=>{
        return(
            <div className='px-4 my-5 bg-light rounded-3 py-5'>
                <div className='container py-4'>
            <div className="row">
                    <h4> Your cart is empty now, Please add some item/s to show</h4>
            </div>
                </div>
            </div>
        )
    }

    const button=()=>{
        return(
            <div className="container">
                <div className="row">
                    <NavLink to='/checkout' className='btn btn-outline-primary mb-5 w-25'>Proceed to Chechout</NavLink>
                </div>
            </div>
        )
    }

  return (
    <>
        {storeState.length === 0 && emptyCart()}
        {storeState.length !== 0 && storeState.map(cartItems)}
        {storeState.length !== 0 && button()}
    </>
  )
}

export default Cart