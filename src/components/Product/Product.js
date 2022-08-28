import React from 'react';
import './Product.css'

const Product = ({ product }) => {
    const { name, picture, price } = product;

    return (
        <div className='product'>
            <div className='picture'>
                <img src={picture} alt="" />
            </div>
            <div className='details'>
                <h3>{name}</h3>
                <h4>Price: $ {price}</h4>
                <button>Buy Now</button>
            </div>

        </div>
    );
};

export default Product;