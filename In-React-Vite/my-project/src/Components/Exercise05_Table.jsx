import React from 'react'

function Exercise05_Table() {
  const sampleData=[
    {id:100,name:"Abel kebede",department:"Software Engineer",age:22},
    {id:101,name:"Makbel kebede",department:"Civil Engineer",age:34},
    {id:102,name:"Alemu kebede",department:"Computor Engineer",age:32},
    {id:103,name:"Almaz kebede",department:"Mechanical Engineer",age:42},
    {id:104,name:"Abera kebede",department:"Electrical Engineer",age:12}
  
  ];
  return (
    <div className='p-6 bg-gray-300'>
      <h1 className='text-xl font-bold mb-4 text-center p-4'>Stundent Table</h1>
        {/* basics of table */}
        <table className='table-auto border-collapse bg-gray-100  shadow rounded-2xl border border-amber-500 w-full'>
          <thead >
            <tr className='bg-gray-200 font-bold text-xl '>
              <th className='border border-gray-400 px-4 py-2' >ID</th>
              <th className='border border-gray-400 px-4 py-2' >Name</th>
              <th className='border border-gray-400 px-4 py-2' >Department</th>
              <th className='border border-gray-400 px-4 py-2' >Age</th>
            </tr>
          </thead>
          <tbody>
        {
          sampleData.map((stud)=>(
  <tr key={stud.id} className='text-center'>
          <td className='border border-gray-400 px-4 py-2' >{stud.id}</td>
         <td className='border border-gray-400 px-4 py-2' >{stud.name}</td>
        <td className='border border-gray-400 px-4 py-2' >{stud.department}</td> 
        <td className='border border-gray-400 px-4 py-2' >{stud.age}</td>  
  </tr>
          ))
        }

          </tbody>
        </table>
    </div>
  )
}

export default Exercise05_Table