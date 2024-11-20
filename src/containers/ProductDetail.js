import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { removeSelectedProduct, selectedProducts } from '../redux/actions/productActions';

const ProductDetail = () => {
  const product = useSelector((state) => state?.product); // Correct state access
  console.log("Product1", product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const { productId } = useParams();

  const fetchProductDetail = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      dispatch(selectedProducts(response.data)); // Dispatch fetched product data
    } catch (error) {
    //   console.error("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return () =>{
        dispatch(removeSelectedProduct());
    }
  }, [productId]);

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} alt={title} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
