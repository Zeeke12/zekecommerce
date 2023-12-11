import React from 'react'
import { useApiData } from '../db/ApiDataContext'

const TestPage = () => {
    const { data, search } = useApiData();


  console.log(data.data.products)

  return (
    <div style={{marginTop: '150px'}}> TestPage
      <input type='text' onChange={search} />
        <div>
        </div>
    </div>
  )
}

export default TestPage