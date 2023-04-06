import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    // console.log(cart)
    let totalPrice = 0;
    let totalShipping = 0;
    let totalQuantity = 0;
    for (const product of cart) {
        totalQuantity = totalQuantity + product.quantity;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping * product.quantity;
    }

    const tax = ((totalPrice * 7) / 100);

    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Order Summary</h2>
            <p>Selected Items : {totalQuantity}</p>
            <p>Total Price : {totalPrice}</p>
            <p>Total Shipping Change : {totalShipping}</p>
            <p>Tax : {tax}</p>
            <p style={{ fontSize: '20px' }}>Grand Total : {grandTotal}</p>

        </div>
    );
};

export default Cart;