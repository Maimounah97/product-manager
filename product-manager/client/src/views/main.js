import React, { useEffect, useState } from 'react'
import ProductForm from '../component/productForm';
import ProductsList from '../component/productsList';
import axios from 'axios';
    
const Main = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProducts(res.data.Products);
                setLoaded(true);
                console.log(res.data.Products)
                console.log(products)
            })
            .catch(err => console.error(err));
    },[]);

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    }
    
    return (
        <div>
           <ProductForm/>
           <hr/>
           {loaded && <ProductsList products={products} removeFromDom={removeFromDom}/>}
        </div>
    )
}
    
export default Main;

