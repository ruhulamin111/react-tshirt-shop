import React, { createContext, useState } from 'react';
import useProducts from '../../hooks/useProducts/useProducts';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Home.css';

export const Shirt = createContext('polo');

const Home = () => {
    const [products] = useProducts();
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
    let message;
    if (cart.length === 1) {
        message = <p>welcome</p>
    }
    const brand = 'Easy';

    return (
        <Shirt.Provider value={brand}>
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
                    {message}
                    {cart.length === 2 ? <p>thanks</p> : <p></p>}
                    {cart.length === 3 && <p>congratulation</p>}
                    {cart.length !== 4 || <p>surprice gift</p>}
                </div>
            </div>
        </Shirt.Provider>
    );
};

export default Home;