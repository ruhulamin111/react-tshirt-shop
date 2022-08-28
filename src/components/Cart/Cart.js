import React from 'react';
import Item from '../Item/Item';

const Cart = ({ cart, removeFromCart }) => {
    return (
        <div>
            {
                cart.map((item, index) => <Item
                    key={index}
                    item={item}
                    removeFromCart={removeFromCart}
                ></Item>
                )
            }
        </div>
    );
};

export default Cart;