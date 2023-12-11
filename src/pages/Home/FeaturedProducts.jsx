import React from 'react'
import { products } from '../../db/products'

const FeaturedProducts = () => {
  const rand = Math.floor(Math.random() * 29)
  const { img, title, description, newPrice, prevPrice } = products[rand]
    console.log(rand)
  return (
    <div className='mx-auto'>
      <h1 className='text-8xl text-center'>Featured Product</h1>
    <div className='flex flex-row justify-center gap-3 mx-auto my-4'>
        <div className='relative overflow-hidden'><img className='bg-white w-[200px] h-[250px] md:w-[400px] md:h-[500px] object-contain transform scale-100 hover:scale-150 transition-transform hover:duration-1000' src={img}  alt={title}  /></div>
        <div className='flex flex-col md:w-[500px] '>
            <div className='text-green-500 text-5xl my-3'>{title}</div>
            <div>{description}</div>
            <div className='mt-10'><del>{prevPrice}</del> {newPrice}</div>
            <div><button className=' border-2 border-green-500 px-8 py-2'>BUY NOW</button></div>
        </div>
    </div>
    </div>
  )
}

export default FeaturedProducts