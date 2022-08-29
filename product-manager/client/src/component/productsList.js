import React from 'react'
import axios from 'axios';
import {
    BrowserRouter,
    Switch,
    Route,
    Link 
  } from "react-router-dom";
const ProductsList = (props) => {
    return (
        <div>
            <h2>All Products:</h2>
            {props.products.map((product, i) =>
                // <p key={i}><a href="http://localhost:3000/products/"+{product._id}>{product.title}</a></p>
                <p key={i}> <Link to={"/products/" + product._id}>
                    {product.title}
                </Link></p>

            )}
        </div>
    )
}

export default ProductsList;
