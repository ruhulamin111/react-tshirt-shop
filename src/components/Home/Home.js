import React, { useState } from 'react';
import useProducts from '../../hooks/useProducts/useProducts';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Home.css';

const Home = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([]);
    const addToCart = (selected) => {
        const newCart = [...cart, selected]
        setCart(newCart)
    }

    return (
        <div className='home-container'>
            <div className="products-container">
                {
                    products.map((product, index) => <Product
                        key={index}
                        product={product}
                        addToCart={addToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h3>Selected Item</h3>
                <Cart
                    cart={cart}
                ></Cart>
                {/* {
                    cart.map((item, index) => <Cart
                        key={index}
                        item={item}
                    ></Cart>)
                } */}
            </div>
        </div>
    );
};

export default Home;