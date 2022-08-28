import React from 'react';
import useProducts from '../Product/Product';
import './Home.css';

const Home = () => {
    const [products, setProducts] = useProducts();

    return (
        <div className='home-container'>
            <div className="products-container">
                <p>product</p>
            </div>
            <div className="cart-container">
                <p>cart </p>
            </div>
        </div>
    );
};

export default Home;