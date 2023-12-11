import React from 'react';
import { ProductContext } from '../../db/ProductContext';
import { useContext } from 'react';

const Sidebar = () => {
  const { filterBySearchRed, filterBySearchWhite, filterBySearchGreen, filterBySearchBlack, filterBySearchSandals, filterBySearchSneakers, filterBySearchHeels, filterBySearchFlats } = useContext(ProductContext)

  return (
    <div className='w-20px mx-5 sticky top-20 max-h-28'>
      <div className='flex flex-column mx-0 text-center '>
        <div className='h2'>Color</div>
          <button onClick={filterBySearchRed} className='text-red-600'><button className='w-3 h-3 bg-red-600 rounded-full mx-1 '></button> Red</button>
          <button onClick={filterBySearchWhite}><button className='w-3 h-3 bg-white rounded-full mx-1 '></button>White</button>
          <button onClick={filterBySearchBlack}><button className='w-3 h-3 bg-black rounded-full mx-1 '></button>Black</button>
          <button onClick={filterBySearchGreen}><button className='w-3 h-3 bg-green-600 rounded-full mx-1 '></button>Green</button>

      </div>
      <div>
        <h1 className='h2'>Categories</h1>
        <div className='flex flex-column'>
          <button onClick={filterBySearchSneakers}> Sneakers</button>
          <button onClick={filterBySearchHeels}>Heels</button>
          <button onClick={filterBySearchFlats}>Flat</button>
          <button onClick={filterBySearchSandals}>Sandals</button>

        </div>
      </div>
    </div>
  )
}

export default Sidebar;