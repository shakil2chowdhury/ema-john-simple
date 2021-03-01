import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {img, name, seller, price, stock} = props.product;
    return (
        <div class="product-container">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="product-name">
                <h4>{name}</h4>
                <p><small>By : {seller}</small></p>
                <p>${price}</p>
                <p><small>Only <b>{stock}</b> Items Remaining. Order ASAP!</small></p>
                <button onClick={() => props.handleAddToCart(props.product)} className="button"><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
            </div>
        </div>
    );
};

export default Product;