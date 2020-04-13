import React from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import { useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const Shop = () => {
    const first15 = fakeData.slice(0, 15);
    const [products, setProducts]= useState(first15);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(existingkey => {
            const product = fakeData.find(pd => pd.key === existingkey);
            product.quantity = savedCart[existingkey];
            return product;
            
        })
        setCart(previousCart);
        
    }, [])

    const handleAddProduct = (product) => {
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key ===toBeAddedKey);
        let count = 1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct];
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);
        
    }

    return (
        <section className="container">
            <div className="twin-container">
                <div className="product-container">
                    <ul>
                        {
                            products.map(pd => <Product 
                                key={pd.key}
                                showAddToCart={true}
                                handleAddProduct = {handleAddProduct}
                                product={pd}
                                ></Product>)
                        }
                    </ul>
                </div>
                <div>
                    <Cart cart={cart}>
                        <Link to="/review">
                        <button className="main-btn">Review Order</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </section>
    );
};

export default Shop;