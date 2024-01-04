import React from 'react'
import Image from 'next/image'
import banner from "../../../public/winter_sale2.jpeg"
import banner2 from '../../../public/winter_sale1.jpeg'

const Sale = () => {
  return (
    <div className='flex '>
      <Image src={banner} alt='stationary sale' className='mt-10 mx-36 w-96 rounded-lg'/>
      <Image src={banner2} alt='stationary sale' className='mt-10 mx-36 w-96 rounded-lg'/>
    </div>
  )
}

export default Sale