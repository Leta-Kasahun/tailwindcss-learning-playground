import React from 'react'

function Exercise10_Interactivity() {
  return (
    <div className='min-h-screen bg-gray-300 rounded shadow m-4 space-y-10'>
      <h1 className='text-center font-bold p-4 mb-4'>Interactivity In Tailwinds css</h1>
      <button className='text-center  flex justify-center rounded-lg bg-blue-500 text-white p-4 m-5 bock md:hidden hover:bg-blue-300 transition duration-700'>Hover me</button>
        <div className='m-5 p-5 bg-gray-200'>
          <h2 className='text-center font-black m-7'>Focus</h2>
          <input type="text"
          placeholder='Click or Tap here' 
          className='border border-green-300 px-4 py-2 rounded-lg w-64 
                     focus:outline-none focus:ring-2 focus:ring-blue-500'/>
          
        </div>
        <div></div>
    </div>
  )
}

export default Exercise10_Interactivity