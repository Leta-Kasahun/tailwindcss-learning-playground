import React from 'react'

function Exercise09_Display() {
  return (
    <div className='min-h-screen p-6 bg-gray-200 space-y-8'>
      <h1 className='text-xl text-center font-bold p-6'>All Displays Demo</h1>
        <div className='text-xl block font-bold p-4 mb-4 text-center'>Block Elements Takes fullwidth
        </div>
        <div className='bg-gray-500 shadow p-4 rounded'>
          <div className='inline-block bg-green-400 text-white text-center p-4 rounded w-1/2'>Inline Block one</div>
          <div className='inline-block bg-blue-400 text-white text-center p-4 rounded w-1/4'>Inline Block two</div>
        </div>
        <div>
          <h2 className='text-lg font-bold mb-2 text-center'>Hidde and showing resposive design</h2>
          <div className='block md:hidden bg-green-400 text-white p-4 tex-center'>    📱 Visible on Mobile (hidden on Desktop)</div>
          <div className='hidden md:block bg-blue-500 text-center text-white'> 💻 Visible on Desktop (hidden on Mobile)</div>
        </div>
    </div>
  )
}

export default Exercise09_Display