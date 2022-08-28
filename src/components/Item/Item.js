import React, { useContext } from 'react';
import { Shirt } from '../Home/Home';
import './Item.css'

const Item = ({ item, removeFromCart }) => {
    const brand = useContext(Shirt);

    return (
        <div>
            <div className='item'>
                <p>{item.name}</p>
                <p>{brand}</p>
                <button onClick={() => removeFromCart(item)}>Remove</button>
            </div>
        </div>
    );
};

export default Item;