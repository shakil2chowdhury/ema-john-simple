import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const cart = props.cart;
    const total = cart.reduce((total,product) => total + product.price,0);


    let shipping = 0;
    if(total > 0 && total <= 10){
        shipping = 8;
    } else if(total > 100)
    {
        shipping = 12;
    } else {
        shipping = 0;
    }

    const tax = total/10;
    const finalTotal = total+shipping+tax;

    const handleNumber = (num) => {
        let precision = num.toFixed(2);
        return Number(precision); 
    }

    return (
        <div className="order-summary">
            <h1>Order Summary</h1>
            <h5>Total Items {cart.length}</h5>
            <p>Product Price: {handleNumber(total)}</p>
            <p>Shipping Charge: ${shipping}</p>
            <p>Tax : ${handleNumber(tax)}</p>
            <p className="red">Total Price: ${handleNumber(finalTotal)}</p>

        </div>
    );
};

export default Cart;