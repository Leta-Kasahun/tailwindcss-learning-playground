import React from 'react'

function StarterTemplet() {
  return (
    <div className='min-h-screen bg-gray-100'>
        {/* navbar */}
        <nav className='bg-white shadow-md p-4 flex justify-between items-center'>
            <h1 className='text-2xl font-bold text-blue-600'>MY App</h1>
        <ul className='flex space-x-6'>
            <li><a href="#"className='text-gray-700 hover:text-blue-600 '>Home</a></li>
            <li><a href="#"className='text-gray-700 hover:text-blue-600 '>About </a></li>
            <li><a href="#"className='text-gray-700 hover:text-blue-600 '>Contact</a></li>
                

        </ul>
        </nav>
{/* hero section  */}
<section className='flex flex-col items-center justify-center mt-20 px-4'>
    <h2 className='text-4xl md:text-xl text-gray-800 font-extrabold mb-4'>Welcome to <span className='text-blue-600'>Tailwind CSS</span></h2>
<p className='text-lg md:text-xl text-gray-600 mb-6 max-w-2xl'>
    This is simple starter templete with a hero and navbar styled with tailwind css and react + vite
</p>
</section>
<button className='bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition'>
    Get Started
</button>
    </div>
  )
}

export default StarterTemplet