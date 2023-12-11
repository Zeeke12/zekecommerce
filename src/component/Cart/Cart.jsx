import React from 'react'
import { ProductContext } from '../../db/ProductContext'
import { useContext } from 'react'
import CartItems from './CartItems';
import { products } from '../../db/products';



const Cart = () => {
  const { cart, clearCart, calculateTotal  } = useContext(ProductContext); 
  return (
    
    <div style={{marginTop: '40px'}}>
      <h1 className='h1 text-center'>My Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
      <div className='flex flex-col'>
        {cart.map((cartitem) => <CartItems key={cartitem.id} title={cartitem.title} img={cartitem.img} newPrice={cartitem.newPrice}  id={cartitem.id} quantity={cartitem.quantity}  /> )  }
      </div>)}
      {cart.length === 0 ? (
        <p></p>
      ) : (
        <div className='text-center'><button className='outline px-3' onClick={() => clearCart(products)}>Clear Cart</button>
        <div>
        <p>Total Amount: ${calculateTotal().toFixed(2)}</p>
      </div>
      </div> ) }
    </div>
  )
}

export default Cart