import React from 'react'
import { ApiDataProvider } from '../db/ApiDataContext';



const TestPage = () => {
    const { data } = useContext(ApiDataProvider)

  return (
    <div>
        {data.map((product) => (<h1>{product.title}</h1>))}
    </div>
  )
}

export default TestPage