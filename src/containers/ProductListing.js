import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { setProducts } from '../redux/actions/productActions'; 

const ProductListing = () => {
    const dispatch = useDispatch();
    const products = useSelector((state)=>state);
    // console.log(products);

    const fetchProducts = async () =>{
        const response = await axios
        .get("https://fakestoreapi.com/products/")
        .catch((err) =>{
            console.log("err", err);
        });
        dispatch(setProducts(response?.data))
        // console.log("Response", response?.data);
    }
    useEffect(()=>{
        fetchProducts();
    }, []);
  return (
    <div className='ui grid container'>
        <ProductComponent/>
    </div>
  )
}

export default ProductListing;