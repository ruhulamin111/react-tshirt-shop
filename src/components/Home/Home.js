import React from 'react';
import useProducts from '../../hooks/useProducts/useProducts';
import Product from '../Product/Product';
import './Home.css';

const Home = () => {
    const [products, setProducts] = useProducts();

    return (
        <div className='home-container'>
            <div className="products-container">
                {
                    products.map((product, index) => <Product
                        key={index}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <p>cart </p>
            </div>
        </div>
    );
};

export default Home;