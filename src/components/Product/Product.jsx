import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const { name, img, price, seller, ratings } = props.product;
    const handleAddToCart = props.addToCart;
    return (
        <div className='product-info'>
                <img src={img} alt="" />
            <div className='product-details'>
                <h6>{name}</h6>
                <p>Price : ${price}</p>
                <p>Manufacturer : {seller}</p>
                <p>Rating : {ratings} star</p>
            </div>
            <button onClick={ () => handleAddToCart(props.product)} className='cart-btn'>
            Add to Cart
            <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;