import React from 'react'
import Image from 'next/image'
import wimpykid from '../../../public/wimpy_kid.jpeg'
const ProductsDetailImage = () => {
  return (
    <div className='text-blue-500 text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px] '>
        <Image src={wimpykid} alt='WimpyKid' className='mx-auto  '/>
    </div>
  )
}

export default ProductsDetailImage 