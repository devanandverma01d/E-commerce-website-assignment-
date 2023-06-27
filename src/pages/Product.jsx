import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'
import { BASE_URL } from '../helpers/helper'
const Product = () => {
  const[data,setData]=useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}`);
        setData(response.data);
        // console.log(response.data)
      } catch (error) {
        // console.log(error);
      }
    };

    fetchData(); 
  }, []);
  return (
    <>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h1>Product</h1>
            <hr />
            <div className="cardClass">
            {
              data.map((item,idx)=>{
                return(
                  <div key={idx} className='me-5 mt-5'>
                    <div className='card' style={{width:"18rem"}}>
                      <div className='col-md-3'>
                        <img className="card-img-top" src={item.image} alt="Card" />
                      </div>
                        <div className="card-body">
                          <h5 className="card-title">{item.title}</h5>
                          <p className="card-text">Price:  ${item.price}</p>
                          <NavLink className="btn btn-outline-primary" to={`/product/${item.id}`}>Buy Now</NavLink>
                        </div>
                    </div>
                  </div>

                )
              })
            }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product