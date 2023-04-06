import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async() => {
    const loaderProducts = await fetch('products.json');
    const products = await loaderProducts.json();
    // console.log(products)

     const storeCart = getShoppingCart();
     const saveCart = [];
     
     for (const id in storeCart){
        // console.log(id)
        const addProduct = products.find(product => product.id === id)
        if(addProduct){
            const quantity = storeCart[id];
            addProduct.quantity = quantity;
            saveCart.push(addProduct)
        }
     }

    return saveCart;
}

export default cartProductsLoader;