import React from 'react'


const Results = ({ title, img, newPrice }) => {
  return (
    <div className='m-4 flex flex-row gap-3'>
      <div>
        <img src={img} className='bg-white' style={{objectFit: 'contain', width: '200px', height: '250px'}} alt={title} />
      </div>
      <div>
        <h1>{title}</h1>
        
      </div>
      
    </div>
  )
}

export default Results