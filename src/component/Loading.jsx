import React from 'react'

const Loading = () => {
  return (
    <div className='border border-red-200 m-4'>
        <div className='animate-pulse'>
        <div className='w-[300px] border-2 pb-2 mb-4 flex justify-center flex-col'>
    <div className="px-28 w-[300px] h-[200px] py-28  bg-neutral-400 text-white  "></div>
            
    <div className='flex flex-col gap-3 px-1 my-2'>
      <div className='flex justify-between '>
      <button className="px-4 py-2  ml-1 bg-neutral-400 text-white  "> </button>
      <button className="px-4 py-2   bg-neutral-400 text-white  "> </button>

 </div>
    <div class="card-text"></div>
    <button className="px-28 py-3  mx-auto bg-neutral-400 text-white rounded-lg "> </button>
            
  </div>
</div>
        </div>
    </div>
  )
}

export default Loading