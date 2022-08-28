import React from 'react';
import './Item.css'

const Item = ({ item, removeFromCart }) => {
    return (
        <div>
            <div className='item'>
                <p>{item.name}</p>
                <button onClick={() => removeFromCart(item)}>Remove</button>
            </div>

        </div>
    );
};

export default Item;