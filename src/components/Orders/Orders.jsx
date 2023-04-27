import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCardAlt } from '@fortawesome/free-regular-svg-icons';


const Orders = () => {
  const saveCart = useLoaderData();
  const [cart, setCart] = useState(saveCart)
  // console.log(cart)

  const removeItem = (id) => {
    const remaining = cart.filter(product => product.id !== id);
    setCart(remaining);
    removeFromDb(id)
  }

  const clearCartData = () => {
    setCart([])
    deleteShoppingCart()
  }
  return (
    <div className='shop-container'>
      <div className='review-container'>
        {
          cart.map(product => <ReviewItem
            key={product.id}
            product={product}
            removeItem={removeItem}
          ></ReviewItem>)
        }
      </div>
      <div className='cart-container'>
        <Cart
          cart={cart}
          clearCartData={clearCartData}
        >
          <Link to={'/checkout'}>
            <button className='cart-proses-btn'>
              <span>Proceed Checkout</span>
              <FontAwesomeIcon icon={faCreditCardAlt}></FontAwesomeIcon>
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;