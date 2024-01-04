import React from 'react'
import Image from 'next/image'
import bedsheet from '../../../../public/bedsheet.webp'
import bed from '../../../../public/bed.jpeg'
import sofa from '../../../../public/sofa.jpeg'
import study_table from '../../../../public/study_table.jpeg'
import coffee_table from '../../../../public/coffee_table.jpeg'

const page = () => {
  return (
    <div>
    <h1 className='text-center text-3xl mt-10'>
      Furniture
    </h1>

   <div className='w-full grid lg:grid-cols-5 grid-flow-row md:grid-cols-3 sm:grid-cols-2 gap-1 mt-3'>
     <div className='text-lg mt-3 mx-10 sm:mt-3 sm:mx-10 hover:shadow-2xl'>
        <Image src={bedsheet} alt='bedsheet' className='mx-auto mt-2'/>
        <h3 className='mt-3'>3 Piece Embroided Double Bedsheet Set</h3>
        <h4 className='mt-5 text-sky-500'>Rs. 1,200 </h4> 
    </div>

    <div className='text-lg mt-3 mx-10 text-blacksm:mt-3 sm:mx-10 hover:shadow-2xl '>
        <Image src={bed} alt='Bed' className=' mx-auto mt-2'/>
        <h3 className='mt-3'>Habitt - Savior King Size Bed With Two Side Tables - Double Bed </h3>
        <h4 className='mt-5 text-sky-500'> Rs. 50,000</h4>
    </div>

    <div className='text-lg mt-3 mx-10 text-black sm:mt-3 sm:mx-10 hover:shadow-2xl '>
        <Image src={sofa} alt='Sofa' className=' mx-auto mt-2'/>
       <h3 className='mt-3'>3 Seater stylish Sofa Imported Fabric big size 3 free cusions  </h3>
       <h4 className='mt-5 text-sky-500'> Rs. 20,000 </h4>
    </div>

    <div className='text-lg mt-3 mx-10 text-black sm:mt-3 sm:mx-10 hover:shadow-2xl '>
        <Image src={study_table} alt='Study-Table' className=' mx-auto mt-2'/>
        <h3 className='mt-3'>Laptop Stand, Computer Stand with K-Shape Design Modern and Best suited for Online Work and Study</h3>
        <h4 className='mt-5 text-sky-500'>Rs. 8,000 </h4>
    </div>

    <div className='text-lg mt-3 mx-10 text-black sm:mt-3 sm:mx-10 hover:shadow-2xl '>
        <Image src={coffee_table} alt='Coffee-Table' className=' mx-auto mt-2'/>
        <h3 className='mt-3'> Modern Style Industrial Square Coffee Table </h3>
        <h4 className='mt-5 text-sky-500'>Rs. 11,000</h4>
    </div>
 
  </div>
</div>
  )
}

export default page