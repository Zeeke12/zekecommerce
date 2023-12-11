import React from 'react'
import { ProductContext } from '../../db/ProductContext';
import { useContext } from 'react';

const CartItems = ({ title, img, newPrice, id, quantity}) => {
  const { removeFromCart, decreaseQuantity, increaseQuantity, updateCart } = useContext(ProductContext); 

  return (
    <div className="mx-auto border pr-4 mb-7">
  <div className="flex flex-row gap-1 justify-end">
    <div className="bg-white ">
      <img src={img} className='bg-white' style={{objectFit: 'contain', width: '400px', height: '200px'}} alt="{title}" />
    </div>
    <div className="md:w-300px">
      <div className="flex flex-col gap-2 ">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">${newPrice}</p>
        <div className="flex flex-row">
  <button className="btn btn-outline-secondary" type="button" onClick={() => decreaseQuantity(id)}  >-</button>
  <input className=' w-[100px] md:w-[400px] border border-red-500 px-7'  type='number' min='1' value={quantity} onChange={(e) => updateCart(id, parseInt(e.target.value, 10))} />
  <button className="btn btn-outline-secondary" type="button" onClick={() => increaseQuantity(id)}  >+</button>
</div>
<div>
  <button className="bg-green-500 px-4 py-2 mt-3 rounded-lg" onClick={() => removeFromCart(id)}>Remove</button>
</div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default CartItems