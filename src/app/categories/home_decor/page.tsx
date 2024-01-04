import React from 'react'
import Image from 'next/image'
import clock from '../../../../public/clock.webp'
import plants from '../../../../public/plants.jpeg'
import potrait from '../../../../public/potrait.jpeg'
import poster from '../../../../public/poster.webp'
import poster2 from '../../../../public/poster2.webp'

const page = () => {
  return (
    <div>
    <h1 className='text-center text-3xl mt-10'>
      Home Decor
    </h1>

   <div className='w-full grid lg:grid-cols-5 grid-flow-row md:grid-cols-3 sm:grid-cols-2 gap-1 mt-3'>
     <div className='text-lg mt-3 mx-10 sm:mt-3 sm:mx-10 hover:shadow-2xl'>
        <Image src={clock} alt='Clock' className='mx-auto mt-2'/>
        <h3 className='mt-3'>High quality wooden wall clock | Flower shaped wall clock | flower shaped wooden wall clock</h3>
        <h4 className='mt-5 text-sky-500'>Rs. 450 </h4> 
    </div>

    <div className='text-lg mt-3 mx-10 text-blacksm:mt-3 sm:mx-10 hover:shadow-2xl '>
        <Image src={plants} alt='Plants' className=' mx-auto mt-2'/>
        <h3 className='mt-3'>Pack of 6 Mini Artificial Plant Decoration Piece with pot</h3>
        <h4 className='mt-5 text-sky-500'> Rs.300</h4>
    </div>

    <div className='text-lg mt-3 mx-10 text-black sm:mt-3 sm:mx-10 hover:shadow-2xl '>
        <Image src={potrait} alt='Potrait' className=' mx-auto mt-2'/>
       <h3 className='mt-3'> New flowers wall art wall art for home decore , gifts , kids room and for office , big size wall art  </h3>
       <h4 className='mt-5 text-sky-500'> Rs. 400 </h4>
    </div>

    <div className='text-lg mt-3 mx-10 text-black sm:mt-3 sm:mx-10 hover:shadow-2xl '>
        <Image src={poster} alt='Poster' className=' mx-auto mt-2'/>
        <h3 className='mt-3'>Ronaldo CR7 Charcoal Design | Football Wall Art</h3>
        <h4 className='mt-5 text-sky-500'>Rs. 3,000 </h4>
    </div>

    <div className='text-lg mt-3 mx-10 text-black sm:mt-3 sm:mx-10 hover:shadow-2xl '>
        <Image src={poster2} alt='Poster' className=' mx-auto mt-2'/>
        <h3 className='mt-3'>Pakistan Cricket Team T20 World Cup 2022 | Cricket Wall Art </h3>
        <h4 className='mt-5 text-sky-500'>Rs. 3,000</h4>
    </div>
 
  </div>
</div>
  )
}

export default page