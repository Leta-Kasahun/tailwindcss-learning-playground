import React from 'react'

function Exercise07_Grid() {
  return (
    <div className='p-6 bg-gray-100 min-h-screen'>
        <h1 className='text-xl font-semibold mb-4'>Grid Layout Demo</h1>
        <div className='grid grid-cols-4 gap-6 bg-gray-200 p-4 rounded-lg'>
  <div className='bg-blue-500 text-white p-6 rounded col-span-2'>Box 1 col span 2</div>
    <div className='bg-blue-500 text-white p-6 rounded'>Box 2</div>
    <div className='bg-blue-500 text-white p-6 rounded col-span-2'>Box 3 clo span 2 </div>
    <div className='bg-blue-500 text-white p-6 rounded'>Box 4</div>
      <div className='bg-blue-500 text-white p-6 rounded'>Box 5</div>
      <div className='bg-blue-500 text-white p-6 rounded'>Box 6</div>
      <div className='bg-blue-500 text-white p-6 rounded row-span-2'>Box 6 row span 2</div>
      <div className='bg-blue-500 text-white p-6 rounded'>Box 7</div>
      <div className='bg-blue-500 text-white p-6 rounded'>Box 8</div>
        <div className='bg-blue-500 text-white p-6 rounded row-span-2'>Box 9 row span 2</div>
          <div className='bg-blue-500 text-white p-6 rounded'>Box 10</div>
            <div className='bg-blue-500 text-white p-6 rounded'>Box 11</div>
        </div>
        <div className='mt-8'>
          <h2 className="text-xl font-semibold mb-2 text-center">Responsive Grid</h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-gray-200 p-4 rounded-lg'>

          <div className="bg-blue-500 text-white p-4 rounded">Box 1</div>
          <div className="bg-green-500 text-white p-4 rounded">Box 2</div>
          <div className="bg-red-500 text-white p-4 rounded">Box 3</div>
          <div className="bg-purple-500 text-white p-4 rounded">Box 4</div>
          <div className="bg-yellow-500 text-white p-4 rounded">Box 5</div>
          <div className="bg-pink-500 text-white p-4 rounded">Box 6</div>
          <div className="bg-indigo-500 text-white p-4 rounded">Box 7</div>
          <div className="bg-teal-500 text-white p-4 rounded">Box 8</div>
        </div>
 <div className="bg-blue-500 p-4 text-white text-center sm:bg-green-500 md:bg-red-500">
  Responsive Box
</div>
        </div>

    </div>
  )
}

export default Exercise07_Grid