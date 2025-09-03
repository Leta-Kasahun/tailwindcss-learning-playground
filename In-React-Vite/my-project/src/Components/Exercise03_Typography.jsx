import React from 'react'

function Exercise03_Typography() {
  return (
    <div className='p-4 spacing-y-8 bg-gray-100 rounded'>
        {/* font sizing */}
        <h1 className='text-4xl font-bold text-blue-600'>heading1 text-4xl , font bold</h1>
        <h2 className='text-3xl font-semibold text-indigo-600'> heading 2 text-3xl font-wight semibold</h2>
        <h3 className='text-2xl font-medium text-purple-600'>heading 3 text-2xl font-meduim</h3>
        <h4 className='text-xl font-normal text-green-600'>heading 4 text-xl font normal</h4>
        <p className='text-base text-gray-700'>text-base and default font</p>
        <p className='text-sm text-gray-500'>text-sm small text</p>
   {/* font wight?? */}
    <section >
      <h2 className='text-2xl font-bold text-gray-600 mb-6'>Font wight</h2>
      <div className='space-y-4 p-6 bg-white rounded-lg shadow'>
        <p className='text-xl font-thin'>Thin weight font-thin</p>
        <p className='text-xl font-extralight'>Extra light weight</p>
        <p className='text-xl font-light'>Light weight</p>
        <p className='text-xl font-normal'>Normal weight</p>
        <p className='text-xl font-medium'>Meduim weight</p>
        <p className='text-xl font-bold'>Bold weight</p>
        <p className='text-xl font-extrabold'>Extra bold weigh</p>
        <p className='text-xl font-black'>Black weight</p>

      </div>

    </section>
    {/* text alignment  */}
    <section>
      <h2 className='text-center text-2xl font-bold text-gray-800 mb-6'>Text Alignment </h2>
      <div className='space-y-6 p-6 bg-white rounded-lg shadow'>
        <p  className='text-left bg-gray-100 p-2'>Left Alignment Text</p>
        <p className='text-right bg-gray-100 p-2 '>Right Alignment Text </p>
        <p className='text-center bg-gray-100 p-2'>Center Alignment Text</p>
        <p className='text-justify bg-gray-100 p-2'>Justify Text This text will spread to fill the entire width of the container, creating even margins on both sides.</p>

      </div>
    </section>

     {/* text decoration  */}
    <section>
      <h2 className='text-center text-2xl font-bold text-gray-800 mb-6'>Text Decoration </h2>
      <div className='space-y-6 p-6 bg-white rounded-lg shadow'>
      <p className='underline'>Uderlined text</p>
      <p className='line-through'>line through text</p>
      <p className='overline'>Over line text</p>
      <p className='underline decoration-blue-300'>Blue underline decoration text</p>
      <p className='underline decoration-dashed'>Under line decoration dashed</p>
      <p className='underline decoration-dotted'>Underline decoration dotted</p>
      </div>
    </section>
  
 {/* text transformation */}
    <section>
      <h2 className='text-center text-2xl font-bold text-gray-800 mb-6'>Text Transformation </h2>
      <div className='space-y-6 p-6 bg-white rounded-lg shadow'>
<p className='uppercase'>Upper case text</p>
<p className='lowercase'>Lower case text</p>
<p className='capitalize'>Capitalized text</p>
      </div>
    </section>
    </div>
  )
}

export default Exercise03_Typography