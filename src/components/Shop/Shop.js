import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    
    const product10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(product10);
    const [cart, setCart] = useState([]);

    const handleAddToCart = (props) => {
        console.log(props);
        const newCart = [...cart, props];
        setCart(newCart);
    }
    return (
        <div className="container">
            <div className="products-container">
                    {
                        products.map(product => <Product 
                            handleAddToCart = {handleAddToCart}
                            product = {product} 
                            />)
                    }
            </div>
            <div className="cart-container">
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Shop;