import React from "react";
import "./Product.css";
import { BsFillCartPlusFill } from "react-icons/bs";

const Product = ({ product, handleAddToCart }) => {
    const { img, price, name, seller, ratings } = product;

    return (
        <div className="product-container">
            <img className="product-mag" src={img} alt={name} />
            <div className="product-info">
                <p className="product-name">{name}</p>
                <p>Price: ${price}</p>
                <p>
                    <small>Seller: {seller}</small>
                </p>
                <p>
                    <small>Ratings: {ratings} stars</small>
                </p>
            </div>
            <button
                className="btn-cart"
                onClick={() => {
                    handleAddToCart(product);
                }}
            >
                <p>Add to cart</p>

                <BsFillCartPlusFill style={{ fontSize: "20px" }} />
            </button>
        </div>
    );
};

export default Product;
