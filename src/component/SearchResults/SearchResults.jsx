import React, { useContext } from 'react';
import { ProductContext } from '../../db/ProductContext';
import Results from './Results';

function SearchResults() {
    const { result, searchInput } = useContext(ProductContext)

  return (
    <div>
      {result.length === 0  ? (
        <h1>Product Not Found</h1>
      ) : (
        <div className='flex flex-row flex-wrap'>
          <h1>Result for {searchInput}</h1>
      {result.map((product) => (<Results key={product.id} title={product.title} img={product.img} newPrice={product.newPrice} />))} </div>) 
}
    </div>
  );
}

export default SearchResults;