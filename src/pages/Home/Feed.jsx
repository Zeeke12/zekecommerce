import React from 'react'
import FeedTopCard from './FeedTopCard'
import Shared from '../Products/Shared'
import FeaturedProducts from './FeaturedProducts'



const Feed = () => {
  return (
    <div className='mx-0' >
        <FeedTopCard />
        <FeaturedProducts />
        <Shared />
    </div>
  )
}

export default Feed