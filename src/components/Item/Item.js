import React, { useContext } from 'react';
import { Shirt } from '../Home/Home';
import './Item.css'

const Item = ({ item, removeFromCart }) => {
    const value = useContext(Shirt)

    return (
        <div>
            <div className='item'>
                <p>{item.name}</p>
                <button onClick={() => removeFromCart(item)}>Remove</button>
                {/* {value} */}
            </div>

        </div>
    );
};

export default Item;