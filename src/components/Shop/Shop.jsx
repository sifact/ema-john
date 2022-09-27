import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const handleAddToCart = (product) => {
        const newArray = [...cart, product];
        setCart(newArray);
    };

    return (
        <div className="shop-container">
            <div className="products-container">
                {products.map((product) => (
                    <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    />
                ))}
            </div>
            <div className="cart-container">
                <h1>Number of products: {cart.length}</h1>
            </div>
        </div>
    );
};

export default Shop;
