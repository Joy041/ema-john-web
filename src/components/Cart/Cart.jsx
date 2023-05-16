import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
<script src="https://kit.fontawesome.com/ab631fbcc1.js" crossorigin="anonymous"></script>


const Cart = ({ cart, clearCartData, children }) => {
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
            <p className='cart-margin'>Selected Items : {totalQuantity}</p>
            <p className='cart-margin'>Total Price : {totalPrice}</p>
            <p className='cart-margin'>Total Shipping Change : {totalShipping}</p>
            <p className='cart-margin'>Tax : {tax}</p>
            <p className='cart-margin' style={{ fontSize: '20px' }}>Grand Total : {grandTotal}</p>
            <button onClick={clearCartData} className='clear-cart-btn'>
                <span>Clear Cart</span>
                <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
            </button>
            {children}
        </div>
    );
};

export default Cart;