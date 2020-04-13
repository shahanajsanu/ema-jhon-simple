import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <section className="container">
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <nav>
                    <a href="/shop">Shop</a>
                    <a href="/review">Order Review</a>
                    <a href="/inventory">Manage Inventory</a>
                </nav>
            </div>
        </section>
    );
};

export default Header;