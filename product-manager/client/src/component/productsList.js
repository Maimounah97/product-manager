import React from 'react'
import axios from 'axios';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
const ProductsList = (props) => {
    const { removeFromDom } = props;

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err));
    }
    return (
        <div>
            <h2>All Products:</h2>
            {props.products.map((product, i) =>
                // <p key={i}><a href="http://localhost:3000/products/"+{product._id}>{product.title}</a></p>
                <div key={i}> <Link to={"/products/" + product._id}>
                    {product.title}
                </Link>
                    <button style={{marginLeft:'20px'}} onClick={(e) => { deleteProduct(product._id) }}>
                        Delete
                    </button>
                </div>


            )}
        </div>
    )
}

export default ProductsList;
