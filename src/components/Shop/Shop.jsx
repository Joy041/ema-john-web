import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect( () => {
        fetch(`products.json`)
        .then(res => res.json())
        .then(data => setProducts(data))
    } , [])

    useEffect( () => {
        // step 1 get id
        const storeCart = getShoppingCart();
        const saveCart = [];
        // console.log(storeCart)
        for(const id in storeCart){
            // console.log(id)
            const addedProduct = products.find(product => product.id === id)
            // console.log(addedProduct)
            if(addedProduct){
                const quantity = storeCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
            }
        }
        setCart(saveCart)
    } , [products])

    const handleAddToCart = (product) => {
        let newCart = []

        const exists = cart.find(c => c.id === product.id);
        if(!exists){
            product.quantity = 1;
            newCart = [...cart, product]
        }

        else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(c => c.id !== product.id);
            newCart = [...remaining, exists]
        }
        setCart(newCart)
        addToDb(product.id)
    }
    return (
        <div className='shop-container'>
           <div className='product-container'>
              {
                products.map(product => <Product 
                   key = {product.id}
                   product = {product}
                   addToCart = {handleAddToCart}
                ></Product>)
              }
           </div>
           <div className='cart-container'>
             <Cart cart = {cart}></Cart>
           </div>
        </div>
    );
};

export default Shop;