import React from 'react'

function Exercise06_FlexBox() {
  return (
    <div className='min-h-screen p-6 bg-gray-100'>
      <h1 className='text-2xl font-bold mb-6 text-center'>Flex Box Demo</h1>
      {/* 1 flox box with justify between */}
   <div className='mt-8'>
       <h2 className="text-xl font-semibold  text-center mb-2">Row Flex - justify-between</h2>
      <div className='flex flex-row justify-between items-center bg-gray-200 p-4 rounded-lg'>
        <div className='bg-blue-500 text-white p-4 rounded'>Box 1</div>
        <div className='bg-green-500 text-white p-4 rounded'>Box 2</div>
        <div className='bg-pink-500 text-white p-4 rounded'>Box 3</div>
      </div>
        
   </div>
   <div className='mt-8'>
    <h2 className='text-xl font-semibold mb-2 text-center'>column flex with centered</h2>
    <div className='flex flex-col justify-center items-center h-64 bg-gray-200 p-4 rounded-lg space-y-6'>
        <div className='bg-blue-500 text-white p-4 rounded'>Box 1</div>
        <div className='bg-green-500 text-white p-4 rounded'>Box 2</div>
        <div className='bg-pink-500 text-white p-4 rounded'>Box 3</div>


    </div>

   </div>

   <div className='mt-8'>
    <h2 className='text-xl font-semibold text-center'>justify and alignment compinations </h2>
    <div className='space-x-6 flex flex-row  justify-center itmes-end h-60 bg-gray-200 p-4 rounded-lg'>
        <div className='bg-blue-500 text-white p-4 rounded'>Box 1</div>
        <div className='bg-green-500 text-white p-4 rounded'>Box 2</div>
        <div className='bg-pink-500 text-white p-4 rounded'>Box 3</div>

    </div>

   </div>
   <div className='mt-8'>
    <h2 className='text-xl text-center font-semibold'>Flex wrap and gap example</h2>


    </div>
    <div className='flex flex-wrap gap-4 p-4 bg-gray-200 rounded-lg '>
      <div className='bg-blue-500 text-white p-4 rounded w-1/3 flex flex-1'>Box 1</div>
       <div className='bg-green-500 text-white p-4 rounded w-1/3 flex flex-2'>Box 2</div>
        <div className='bg-pink-500 text-white p-4 rounded w-1/3 flex flex-5'>Box 3</div>
         <div className='bg-amber-500 text-white p-4 rounded w-1/3 flex flex-1'>Box 4</div>
          <div className='bg-yellow-500 text-white p-4 rounded w-1/3 flex flex-5'>Box 5</div>
   </div>
    </div>
  )
}

export default Exercise06_FlexBox