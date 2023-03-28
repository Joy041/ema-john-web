import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    let totalPrice = 0;
    let totalShipping = 0;
    for (const product of cart){
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }

    const tax = (totalPrice * 7) / 100;

    const grandTotal = totalPrice + totalShipping + tax
    return (
        <div className='cart-container'>
            <h2 style={{textAlign : 'center'}}>Order Summary</h2>
              <p>Selected Items : {cart.length}</p>
              <p>Total Price : {totalPrice}</p>
              <p>Total Shipping Change : {totalShipping}</p>
              <p>Tax : {tax}</p>
              <p style={{fontSize: '20px'}}>Grand Total : {grandTotal}</p>

        </div>
    );
};

export default Cart;