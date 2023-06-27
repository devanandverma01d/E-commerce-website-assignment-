import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import {addItem,delItem} from '../redux/actions/index'
const ProductDetail = () => {
    const prodId = useParams();
    const[cartBtn,setCartBtn]= useState('Add to Cart')
    const[details,setDetails]= useState([])
    const dispatch=useDispatch()
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`https://fakestoreapi.com/products/${prodId.id}`);
            setDetails(response.data);
            // console.log('response---->',response.data)
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchData(); 
      }, []);

      const handleCart=(details)=>{
        if(cartBtn==='Add to Cart'){
          dispatch(addItem(details))
          setCartBtn('Remove from Cart')
        }
        else{
          dispatch(delItem(details))
          setCartBtn('Add to Cart')
        }
      }
  return (
    <>
        <div className='container my-5 py-3'>
            <div className='row'>
                <div className='col-md-6 d-flex justify-content-center m-auto product'>
                    <img src={details.image} alt="" height="400px" width="400px" className='me-2' />
                </div>
                <div className='col-md-6'>
                    <h1>{details.title}</h1>
                    <hr />
                    <h5>Price: ${details.price}</h5>
                    <p>{details.description}</p>
                    <button onClick={()=>handleCart(details)} className='btn btn-outline-primary w-100'>{cartBtn}</button>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default ProductDetail