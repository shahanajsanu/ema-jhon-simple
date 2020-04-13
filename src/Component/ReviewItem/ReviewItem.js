import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    // console.log(props);
    
    const {name, quantity, key, price} = props.product;
    return (
        <section className="container">
            <div className="review-item">
                <h4 className="product-name">{name}</h4>
                <p>Quantity: </p>
                <p><small>Price: $ {price}</small></p>
                <br/>
                <button 
                onClick={()=> props.removeProduct(key)}
                className="main-btn">Remove</button>
            </div>
        </section>
    );
};

export default ReviewItem;