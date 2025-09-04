import React from 'react'

function Exercise04_Position() {
  return (
    <div className='bg-gray-200 space-y-6 m-5 p-5'>
      <h1 className='text-blue-400 text-xl text-center p-4'>Positioning Exercise</h1>
      {/* 1 relative + Absolute positions */}
      <div className='bg-white p-6 mb-6'>
        <h2 className='text-center p-4'>Absolutes and Relative postion</h2>
        <div className='relative bg-gray-100'>
          <div className='absolute top-4 left-4 text-2xl font-bold text-blue-400'>top-4 left-4 Absolute</div>
          <div  className='absolute bottom-4 right-4 text-2xl font-bold text-green-400'>bottom-4 right-4</div>

        </div>

      </div>
    
        {/* fixed positions */}
       <div className='bg-gray-600 spacing-y-6 rounded shadow mb-4'>
        <h2 className='text-xl font-bold bg-gray-200 text-center '>Fixed positions</h2>
        <div className='fixed top-10 left-0 right-0 text-2xl text-blue-500 text-center'>Fixed top-10 left-0 right-0 z-10 </div>
        <div className='mt-16 h-screen'></div>


       </div>
     <div className='bg-gray-400 p-5 mt-5'>
      <h2 className='text-center text-blue text-2xl font-bold underline decoration-amber-300'>sticky positions</h2>
      <div className='sticky top-0 bottom-0 z-10  '>
        Sticky top-0 and btoom-0 
      </div>
      <div className='h-96'></div>
     </div>
   
        
    </div>
  )
}

export default Exercise04_Position