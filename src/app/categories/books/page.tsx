import React from 'react'
import Image from 'next/image'
import wimpykid from '../../../../public/wimpy_kid.jpeg'
import silentpatient from '../../../../public/silent_patient.jpeg'
import deepend from '../../../../public/deepend.jpeg'
import harrypotter from '../../../../public/harrypotter.jpg'
import bookthief from '../../../../public/book_thief.jpeg'

const page = () => {
  return (
    <div>
    <h1 className='text-center text-3xl mt-10'>
      Books
    </h1>

   <div className='w-full grid lg:grid-cols-5 grid-flow-row md:grid-cols-3 sm:grid-cols-2 gap-1 mt-3'>
     <div className='text-lg mt-3 mx-10 sm:mt-3 sm:mx-10 hover:shadow-2xl'>
        <Image src={wimpykid} alt='Wimpykid' className='mx-auto mt-2'/>
        <h3 className='mt-3'>Diary Of A Wimpy Kid: No Brainer by Jeff Kinney</h3>
        <h4 className='mt-5 text-sky-500'>Rs. 350 </h4> 
    </div>

    <div className='text-lg mt-3 mx-10 text-blacksm:mt-3 sm:mx-10 hover:shadow-2xl '>
        <Image src={silentpatient} alt='SilentPatient' className=' mx-auto mt-2'/>
        <h3 className='mt-3'>Silent Patient by Alex Michaelides</h3>
        <h4 className='mt-5 text-sky-500'> Rs. 500</h4>
    </div>

    <div className='text-lg mt-3 mx-10 text-black sm:mt-3 sm:mx-10 hover:shadow-2xl '>
        <Image src={bookthief} alt='BookThief' className=' mx-auto mt-2'/>
       <h3 className='mt-3'> The Book Thief by Marcus Zusak </h3>
       <h4 className='mt-5 text-sky-500'> Rs. 1,000 </h4>
    </div>

    <div className='text-lg mt-3 mx-10 text-black sm:mt-3 sm:mx-10 hover:shadow-2xl '>
        <Image src={harrypotter} alt='HarryPotter' className=' mx-auto mt-2'/>
        <h3 className='mt-3'>Harry Potter And The Philosopher's Stone by J.K.Rowling</h3>
        <h4 className='mt-5 text-sky-500'>Rs. 1,000 </h4>
    </div>

    <div className='text-lg mt-3 mx-10 text-black sm:mt-3 sm:mx-10 hover:shadow-2xl '>
        <Image src={deepend} alt='DeepEnd' className=' mx-auto mt-2'/>
        <h3 className='mt-3'> Diary Of A Wimpy Kid: Deep End by Jeff Kinney</h3>
        <h4 className='mt-5 text-sky-500'>Rs. 300</h4>
    </div>
 
  </div>
</div>
  )
}

export default page