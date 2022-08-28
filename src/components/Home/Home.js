import React, { useState } from 'react';
import useProducts from '../../hooks/useProducts/useProducts';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Home.css';

const Home = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([]);
    const addToCart = (selected) => {
        const exist = cart.find(item => item.id === selected.id);
        if (exist) {
            alert('This item is already selected')
        }
        else {
            const newCart = [...cart, selected]
            setCart(newCart)
        }
    }
    const removeFromCart = (selected) => {
        const rest = cart.filter(item => item.id !== selected.id)
        setCart(rest)
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
                <h3>Selected Item <sup>{cart.length}</sup></h3>
                <Cart
                    cart={cart}
                    removeFromCart={removeFromCart}
                ></Cart>
                <button className='proceed'>Proceed Checkout</button>
            </div>
        </div>
    );
};

export default Home;