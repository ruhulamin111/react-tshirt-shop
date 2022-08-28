import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
            <p>{cart.length}</p>
        </div>
    );
};

export default Cart;