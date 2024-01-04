import React from 'react'
import Image from 'next/image'
import pointer from '../../../../public/pointer.jpeg'
import notebook from '../../../../public/notebook.jpeg'
import pen_holder from '../../../../public/pen_holder.jpeg'
import notebook2 from '../../../../public/notebook2.jpeg'
import sharpener from '../../../../public/sharpener.jpeg'

const page = () => {
  return (
    <div>
    <h1 className='text-center text-3xl mt-10'>
        Stationary Items
    </h1>

   <div className='w-full grid lg:grid-cols-5 grid-flow-row md:grid-cols-3 sm:grid-cols-2 gap-1 mt-3'>
     <div className='text-lg mt-3 mx-10 sm:mt-3 sm:mx-10 hover:shadow-2xl'>
        <Image src={pointer} alt='pens' className='mx-auto mt-2'/>
        <h3 className='mt-3'>Dollar Pointer WOW 10's Display Pack</h3>
        <h4 className='mt-5 text-sky-500'>Rs. 400</h4> 
    </div>

    <div className='text-lg mt-3 mx-10 text-blacksm:mt-3 sm:mx-10 hover:shadow-2xl '>
        <Image src={notebook} alt='Notebook' className=' mx-auto mt-2'/>
        <h3 className='mt-3'>Subject Notebook</h3>
        <h4 className='mt-5 text-sky-500'> Rs. 300 </h4>
    </div>

    <div className='text-lg mt-3 mx-10 text-black sm:mt-3 sm:mx-10 hover:shadow-2xl '>
        <Image src={notebook2} alt='Notebook' className=' mx-auto mt-2'/>
       <h3 className='mt-3'>Cute Cartoon With Blue Hat Spiral Notebook </h3>
       <h4 className='mt-5 text-sky-500'> Rs. 200</h4>
    </div>

    <div className='text-lg mt-3 mx-10 text-black sm:mt-3 sm:mx-10 hover:shadow-2xl '>
        <Image src={pen_holder} alt='penholder' className=' mx-auto mt-2'/>
        <h3 className='mt-3'>Pen Stand Round Stand Round Jar - Stationary Holder</h3>
        <h4 className='mt-5 text-sky-500'>Rs. 300</h4>
    </div>

    <div className='text-lg mt-3 mx-10 text-black sm:mt-3 sm:mx-10 hover:shadow-2xl '>
        <Image src={sharpener} alt='Sharpener' className=' mx-auto mt-2'/>
        <h3 className='mt-3'>Opal Pencil Sharpener Machine</h3>
        <h4 className='mt-5 text-sky-500'>Rs. 250</h4>
    </div>
 
  </div>
</div>
  )
}

export default page