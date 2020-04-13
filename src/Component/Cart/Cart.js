import React from 'react';
import './Cart.css';


const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart);
    const total = cart.reduce((total, prd) => total + prd.price, 0);
    
    // let total = 0;
    // for(let i = 0; i> cart.length; i++){
    //     const product = cart[i];
    //     total = total + product.price *product.quantity;
    // }

    let shipping = 0;
    if(total > 35){
        shipping = 4.99;
    }
    else if(total > 15){
        shipping = 12.99;
    }

    const tex = Math.round(total/10);
    const grandTotal =(total + shipping + tex).toFixed(2);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div className="cart-container">
            <h3>Order Summary</h3>
            <h5>Items Ordered: {cart.length}</h5>
            <p>Product Price: ${formatNumber(total)}</p>
            <p><small>Shipping Cost: ${shipping}</small></p>
            <p><small>Tex + Vat: ${tex}</small></p>
            <p>Total Price: ${grandTotal}</p>
            <br/>
            {
                props.children
            }
        </div>
    );
};

export default Cart;