import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
    return (
        <div>
            <h2>Card Summary</h2>
            <h1>Products: {cart.length}</h1>
        </div>
    );
};

export default Cart;
