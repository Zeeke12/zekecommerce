import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ProductContext } from '../../db/ProductContext';
import { useNavigate } from 'react-router-dom';
import Loading from '../../component/Loading';


const ShopFeed = ({ title, img, prevPrice, newPrice, company, color, id }) => {
  

  
  const { addToCart, cart} = useContext(ProductContext);
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 6000)

  }, [])

  return (
    <>{loading ? <Loading /> :
    <div className='w-200px md:w-300px border-2 pb-2 my-4 shadow-2xl hover:duration-1000 duration-1000 mx-2 hover:shadow'>
      <div className='relative overflow-hidden'>
    <img className='bg-white w-[200px] h-[200px] md:w-[300px] md:h-[200px] object-contain transform scale-100 hover:scale-150 transition-transform hover:duration-1000' src={img}  alt={title} onClick={() => navigate(`/products/${encodeURIComponent(title)}`)} />
      </div>
    <div className='flex flex-col gap-3 px-1'>
      <div className='flex justify-between '>
    <div >{title}</div>
    <div className='text-gray-900'> ${newPrice}</div> </div>
    <div class="card-text">{color}</div>
    <button className="py-2 border-1 border-green-900 hover:bg-green-900 hover:text-white"  onClick={() => addToCart({title, img, prevPrice, newPrice, color, id})}>
                Add To Cart {cart.find((item) => item.id === id) && (
              <span className='bg-transparent'>{cart.find((item) => item.id === id).quantity}</span>
            )} </button>
            
  </div>
</div>}
</>
  )
}

export default ShopFeed