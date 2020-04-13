import React from 'react';
import './ProductDetails.css';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetails = () => {
    const {productKey} = useParams();
    const product = fakeData.find(pd => pd.key === productKey);
    console.log(product);
    
    return (
        <section className="container">
            <div className="product-details-container">
                <h1>Your Product Details</h1>
                <Product showAddToCart={false} product={product}></Product>
            </div>
        </section>
    );
};

export default ProductDetails;