import React from 'react'
import { useParams } from 'react-router-dom';
import { products } from '../../db/products';



const ProductDetails = () => {

    const { title } = useParams();
    const productName = decodeURIComponent(title);
    const product = products.find((p) => p.title === productName);

    if (!product) {
        return <div> Product Not Found</div>
    }
  return (
    <div className='product-details' style={{marginTop: '50px'}}>
        <h1>{product.title}</h1>
    </div>
  )
}

export default ProductDetails