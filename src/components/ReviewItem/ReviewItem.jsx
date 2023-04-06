import React from 'react';
import './ReviewItem.css';
import { TrashIcon } from '@heroicons/react/24/solid'

const ReviewItem = ({ product, removeItem }) => {
    // console.log(product)
    const { img, name, price, quantity, id } = product;

    return (
        <div className='review-field'>
            <img src={img} alt="" />
            <div>
                <p>{name}</p>
                <p>Price : <span className='review-span'>${price}</span></p>
                <p>Quantity : <span className='review-span'>${quantity}</span></p>
            </div>
           <button onClick={() => removeItem(id)} className='review-btn'><TrashIcon className="h-6 w-6 text-red-500" /></button>
        </div>
    );
};

export default ReviewItem;