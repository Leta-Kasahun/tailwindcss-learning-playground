import React from 'react'

function Exercise02_Spacing() {
  return (
    <div>
        {/* allside marging and pading demo */}
        <div className="alsides m-5 p-6 bg-amber-100 rounded-2xl">
            m-5 margin allsides and p-6 padding from all inside

        </div>
        <div className="different-sides mt-10 mb-4 ml-6 mr-7 pt-5 pb-7 pl-8 pr-9 rounded bg-amber-200">
            mt-10 top marging 10 mb-4 ml-6 left margin and mr-7 right margin and padding is pt-5 pb-7 pl 8 and pr-9

        </div>
        <div className="verticalHorizotal px-10 py-6 bg-amber-400 m-10 rounded">
            px-10 horizontal padding and py-6 vertical padding

        </div>
        {/* horizotal spacing */}
        <div className='flex space-x-7 bg-gray-100 p-4 rounded mb-6'>
            <div className='bg-red-300 p-4 rounded'>Item One</div>
            <div className='bg-blue-300 p-4 rounded'>Item Two</div>
            <div className='bg-green-300 p-4 rounded'>Item Three</div>

        </div>
        {/* vertical spacing  */}
           <div className='flex-col space-y-8 bg-gray-200 p-4 rounded mt-6'>
            <div className='bg-yellow-300 p-4 rounded'>Item A</div>
            <div className='bg-purple-300 p-4 rounded'>Item B</div>
            <div className='bg-pink-300 p-4 rounded'>Item C</div>

        </div>
    </div>
  )
}

export default Exercise02_Spacing