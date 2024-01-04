import React from 'react'
import Image from 'next/image'
import lighter from '../../../../public/lighter.jpeg'
import spoon from '../../../../public/spoons.webp'
import frying_pan from '../../../../public/frying_pan.jpeg'
import milk_pan from '../../../../public/milk_pan.jpeg'
import container from '../../../../public/container.jpg'
const page = () => {
  return (
    <div>
    <h1 className='text-center text-3xl mt-10'>
        Kitchen Accesories
    </h1>

   <div className='w-full grid lg:grid-cols-5 grid-flow-row md:grid-cols-3 sm:grid-cols-2 gap-1 mt-3'>
     <div className='text-lg mt-3 mx-10 sm:mt-3 sm:mx-10 hover:shadow-2xl'>
        <Image src={lighter} alt='lighter' className='mx-auto mt-2'/>
        <h3 className='mt-3'> Spark Lighter | Electronic Stove Lighter - Kitchen Gas Stove Lighter| Stainless Steel</h3>
        <h4 className='mt-5 text-sky-500'>Rs. 500</h4> 
    </div>

    <div className='text-lg mt-3 mx-10 text-blacksm:mt-3 sm:mx-10 hover:shadow-2xl '>
        <Image src={spoon} alt='Spoon' className=' mx-auto mt-2'/>
        <h3 className='mt-3'>Pack of 3 - Pieces Wooden Nonstick Spoon Set - Kitchen Cooking Utensils Non Stick Wood Kitchen Tools</h3>
        <h4 className='mt-5 text-sky-500'> Rs. 250 </h4>
    </div>

    <div className='text-lg mt-3 mx-10 text-black sm:mt-3 sm:mx-10 hover:shadow-2xl '>
        <Image src={frying_pan} alt='Fryingpan' className=' mx-auto mt-2'/>
       <h3 className='mt-3'> Sonex Non Stick Fry Pan 22 cm </h3>
       <h4 className='mt-5 text-sky-500'> Rs. 1,000</h4>
    </div>

    <div className='text-lg mt-3 mx-10 text-black sm:mt-3 sm:mx-10 hover:shadow-2xl '>
        <Image src={container} alt='Airfryer' className=' mx-auto mt-2'/>
        <h3 className='mt-3'>Lock Air Tight Rectangular Tall Food Container</h3>
        <h4 className='mt-5 text-sky-500'>Rs. 1,500</h4>
    </div>

    <div className='text-lg mt-3 mx-10 text-black sm:mt-3 sm:mx-10 hover:shadow-2xl '>
        <Image src={milk_pan} alt='Milkpan' className=' mx-auto mt-2'/>
        <h3 className='mt-3'>Sonex Non Stick Classic Milk Pan </h3>
        <h4 className='mt-5 text-sky-500'>Rs. 1,200</h4>
    </div>
 
  </div>
</div>
  )
}

export default page