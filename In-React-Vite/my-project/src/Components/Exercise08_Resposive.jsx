import React from 'react'

function Exercise08_Resposive() {
  return (
    <div className='bg-gray-200 m-7 p-4' >
      <h1 className='text-xl text-center font-black'>Responsive Grid  and Flex </h1>
        <h2 className='text-center p-4 m-4'>Grid Resposive design</h2>
      <div className='bg-gray-400 rounded shadow mt-8 p-4 space-y-6 space-x-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8'>
       <div className='bg-green-500 p-4 sm:bg-red-200 lg:bg-red-500' >Box 1</div>
       <div className='bg-red-500 p-4 sm:bg-green-200 lg:bg-green-500'>Box 2</div>
       <div className='bg-green-500 p-4 sm:bg-red-200 lg:bg-red-500' >Box 3</div>
       <div className='bg-red-500 p-4 sm:bg-green-200 lg:bg-green-500'>Box 4</div>
       <div className='bg-green-500 p-4 sm:bg-red-200 lg:bg-red-500' >Box 5</div>
       <div className='bg-red-500 p-4 sm:bg-green-200 lg:bg-green-500'>Box 6</div>
       <div className='bg-green-500 p-4 sm:bg-red-200 lg:bg-red-500' >Box 7</div>
       <div className='bg-red-500 p-4 sm:bg-green-200 lg:bg-green-500'>Box 8</div>
       <div className='bg-green-500 p-4 sm:bg-red-200 lg:bg-red-500' >Box 9</div>
       <div className='bg-red-500 p-4 sm:bg-green-200 lg:bg-green-500'>Box 10</div>
      </div>
                <h2 className='text-center p-4 m-4'>Texts Resposive design</h2>
                <div className='mt-8 bg-gray-500 shadow ronded p-6 flex justify-center'>
                  <span className='text-center p-4 bg-amber-50 text-sm sm:bg-amber-500 sm:text-base md:bg-red-500 md:text-xl lg:bg-green-500 lg:text-2xl'>Text with breaking points</span>
                </div>

       <div className='mt-8'>
        <h2 className='text-xl text-center font-bold mb-4'>Flex wrap and Resposive </h2>
        <div className='flex flex-wrap gap-4 bg-gray-400 m-6 p-5 rounded-lg'>
        <div className='bg-blue-500 text-white p-4 rounded w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>Box A</div>
        <div className='bg-green-500 text-white p-4 rounded w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>Box A</div>
        <div className='bg-yellow-500 text-white p-4 rounded w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>Box A</div>
        <div className='bg-pink-500 text-white p-4 rounded w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>Box A</div>
        <div className='bg-amber-500 text-white p-4 rounded w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>Box A</div>

        </div>
       </div>
    </div>
  )
}

export default Exercise08_Resposive