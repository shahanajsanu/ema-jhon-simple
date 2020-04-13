import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import './Review.css';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import HappyImage from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handlePlaceOrder = () => {
        setCart([]);
        setOrderPlaced(true);
        processOrder();
        
    }

    const removeProduct = (productkey) =>{
        const newCart = cart.filter(pd => pd.key !== productkey);
        setCart(newCart);
        removeFromDatabaseCart(productkey);
    }

    useEffect(()=>{
        //cart
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);

        const cartProducts = productKeys.map( key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart;
            return product;
        });
        setCart(cartProducts);
        
    }, []);
    let thankyou;
    if(orderPlaced){
        thankyou = <img src={HappyImage} alt=""/>
    }
    return (
        <section className="container">
            <div className="twin-container">
                <div className="product-container">
                    {
                        cart.map(pd=> <ReviewItem 
                            removeProduct={removeProduct}
                            key = {pd.key}
                            product={pd}></ReviewItem>)
                    }
                    { thankyou }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <button
                        onClick = {handlePlaceOrder}
                         className="main-btn">Place Order
                        </button>
                    </Cart>
                </div>
            </div>
        </section>
    );
};

export default Review;