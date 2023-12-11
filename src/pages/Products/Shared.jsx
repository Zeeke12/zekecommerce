import React, { useContext } from 'react';
import { ProductContext } from '../../db/ProductContext';
import ShopFeed from './ShopFeed';

const Products = () => {
    const { filteredList, filterBySearchAdidas, filterBySearchAll, filterBySearchVans, filterBySearchPuma, filterBySearchNike } = useContext(ProductContext);

  return (
    <div className='flex '>
    <div >
      <div className='bg-transparent text-3xl md:text-6xl lg:text-9xl'>SHOP BY BRANDS</div>
      <div className='flex gap-5 flex-wrap my-4 bg-transparent'>

      <button className='px-10 py-2 border-1 border-green-900 hover:bg-green-900 hover:text-white  ' onClick={filterBySearchAll} >All</button> 
     <button className='px-10 py-2 border-1 border-green-900 hover:bg-green-900 hover:text-white  ' onClick={filterBySearchAdidas}>Adidas</button> 
     <button className='px-10 py-2 border-1 border-green-900  hover:bg-green-900 hover:text-white  ' onClick={filterBySearchNike}>Nike</button> 
     <button className='px-10 py-2 border-1 border-green-900 hover:bg-green-900 hover:text-white  ' onClick={filterBySearchVans}>Vans</button> 
     <button className='px-10 py-2 border-1 border-green-900 hover:bg-green-900 hover:text-white  ' onClick={filterBySearchPuma}>Puma</button> 
    </div>
    <div className='flex flex-row w-full 00 flex-wrap justify-evenly'>
      {filteredList.map((product, index) => (<ShopFeed  key={index} img={product.img} title={product.title} prevPrice={product.prevPrice} newPrice={product.newPrice} company={product.company} color={product.color} id={product.id}    />))}
      </div>
     </div>
     </div>
  )
} 

export default Products;