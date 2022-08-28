import React from 'react';
import './Item.css'

const Item = ({ item }) => {
    return (
        <div>
            <div className='item'>
                <h4>{item.name}</h4>
                <button>Remove</button>
            </div>

        </div>
    );
};

export default Item;