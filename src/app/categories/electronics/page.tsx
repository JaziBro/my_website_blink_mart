import React from 'react'
import Image from 'next/image'
import toaster from '../../../../public/toaster.jpeg'
import fridge from '../../../../public/fridge.jpeg'
import smart_watch from '../../../../public/smart_watch2.webp'
import airfryer from '../../../../public/air_fryer.jpg'
import laptop from '../../../../public/laptop.jpeg'

const page = () => {
  return (
    <div>
    <h1 className='text-center text-3xl mt-10'>
        Electronic Items
    </h1>

   <div className='w-full grid lg:grid-cols-5 grid-flow-row md:grid-cols-3 sm:grid-cols-2 gap-1 mt-3'>
     <div className='text-lg mt-3 mx-10 sm:mt-3 sm:mx-10 hover:shadow-2xl'>
        <Image src={toaster} alt='toaster' className='mx-auto mt-2'/>
        <h3 className='mt-3'>4 Slice Pop-Up Toaster WF-2528</h3>
        <h4 className='mt-5 text-sky-500'>Rs. 8,000</h4> 
    </div>

    <div className='text-lg mt-3 mx-10 text-blacksm:mt-3 sm:mx-10 hover:shadow-2xl '>
        <Image src={fridge} alt='Fridge' className=' mx-auto mt-2'/>
        <h3 className='mt-3'>Haier 16 Cu Ft/Digital Inverter/HRF-438IDBA (Digital Control Panel+Turbo Fan+4 Temperature Sensors+ABT Technology+Inverter Compressor+Glass Door) Black Colour Refrigerator </h3>
        <h4 className='mt-5 text-sky-500'> Rs. 50,000 </h4>
    </div>

    <div className='text-lg mt-3 mx-10 text-black sm:mt-3 sm:mx-10 hover:shadow-2xl '>
        <Image src={smart_watch} alt='Smart-watch' className=' mx-auto mt-2'/>
       <h3 className='mt-3'>T10 Ultra Smartwatch 2.09inch HD Big Screen Magnetic Wireless Charging Wacth 8 49mm Smart Watch</h3>
       <h4 className='mt-5 text-sky-500'> Rs. 5,000</h4>
    </div>

    <div className='text-lg mt-3 mx-10 text-black sm:mt-3 sm:mx-10 hover:shadow-2xl '>
        <Image src={airfryer} alt='Airfryer' className=' mx-auto mt-2'/>
        <h3 className='mt-3'>Air Fryer 5l digital touch display air fryer uk brand</h3>
        <h4 className='mt-5 text-sky-500'>Rs. 18,000</h4>
    </div>

    <div className='text-lg mt-3 mx-10 text-black sm:mt-3 sm:mx-10 hover:shadow-2xl '>
        <Image src={laptop} alt='Laptop' className=' mx-auto mt-2'/>
        <h3 className='mt-3'> HP 15S-FQ5000NIA Laptop - Intel Core i3-1215U, 4GB, 256GB SSD, Intel Graphics, 15.6" HD Display, Jet black </h3>
        <h4 className='mt-5 text-sky-500'>Rs. 80,000</h4>
    </div>
 
  </div>
</div>
  )
}

export default page