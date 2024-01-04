import React from 'react'
import ProductsDetailImage from '../components/ProductsDetailImage'

const productDetails = () => {
  return (
    <div className='w-full md:py-20'>
        <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px] mx-auto '>
            <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full lg:mx-0'>
                <ProductsDetailImage/>
            </div>
            <div className='flex-[1] py-3'>
              <div className='text-[34px] font-semibold mb-2 '>
                Diary Of a Wimpy Kid: No Brainer 
              </div>
              <div className='text-lg font-semibold mb-5'>
               Author: Jeff Kinney
              </div>
              <div className=' text-lg font-bold text-sky-400 '>
                 Rs. 350
              </div>
              <button className='w-full py-4 rounded-full bg-sky-400 text-yellow-400 text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-5'>
                Buy Now
              </button>
            </div>
        </div>

    </div>
  )
}

export default productDetails