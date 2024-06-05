'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import wimpy_kid from '../../../public/wimpy_kid.jpeg'
import silent_patient from '../../../public/silent_patient.jpeg'
import laptop from'../../../public/laptop.jpeg'
import smart_watch from '../../../public/smart_watch2.webp'
import frying_pan from '../../../public/frying_pan.jpeg'
import milk_pan from '../../../public/milk_pan.jpeg'
import notebook from '../../../public/notebook.jpeg'
import pen_holder from '../../../public/pen_holder.jpeg'
import plants from '../../../public/plants.jpeg'
import bedsheet from '../../../public/bedsheet.webp'
import Link from 'next/link'
import { getProducts } from '../Helpers/page'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

export const New_products = async () => {
   const products = getProducts()
   return (
    <div className='bg-yellow-200 min-h-full'>
        <h1 className='text-center text-3xl mt-10'>
            New Products
        </h1>

       <div className=' w-full grid lg:grid-cols-5 grid-flow-row md:grid-cols-3 sm:grid-cols-2 gap-1 mt-3 '>
           {products.map((product: { id: number; image: string; name: string; price: string}) => (
            <Link href={`/product/${product.id}`} key={product.id} className='text-lg mt-3 mx-10 sm:mt-3 sm:mx-10 hover:shadow-2xl '>
               <Image src={product.image} alt={product.name} className=' mx-auto mt-2'/>
               <h3 className='mt-3'> {product.name} </h3>
               <h4 className='mt-5 text-sky-500'> Rs. {product.price} </h4>
           </Link>
           ))}
       </div>
     </div>
   )
}
export default New_products




// <Link href="/product" className='text-lg mt-3 mx-10 sm:mt-3 sm:mx-10 hover:shadow-2xl '>
// <Image src={wimpy_kid} alt='Wimpykid-book' className=' mx-auto mt-2'/>
// <h3 className=''>Diary Of A Wimpy Kid: No Brainer by Jeff Kinney </h3>
// <h4 className='mt-5 text-sky-500'>Rs. 350</h4> 
// </Link>

// <Link href="" className='text-lg mt-3 mx-10 text-blacksm:mt-3 sm:mx-10 hover:shadow-2xl '>
// <Image src={silent_patient} alt='Silentpatient-book' className=' mx-auto mt-2'/>
// <h3 className='mt-3'>Silent Patient by Alex Michaelides </h3>
// <h4 className='mt-5 text-sky-500'> Rs. 500 </h4>
// </Link>

// <Link href="" className='text-lg mt-3 mx-10 text-black sm:mt-3 sm:mx-10 hover:shadow-2xl '>
// <Image src={laptop} alt='HP-laptop' className=' mx-auto mt-2'/>
// <h3 className='mt-3'> HP 15S-FQ5000NIA Laptop - Intel Core i3-1215U, 4GB, 256GB SSD, Intel Graphics, 15.6" HD Display, Jet black </h3>
// <h4 className='mt-5 text-sky-500'> Rs. 80,000</h4>
// </Link>

// <Link href="" className='text-lg mt-3 mx-10 text-black sm:mt-3 sm:mx-10 hover:shadow-2xl '>
// <Image src={smart_watch} alt='Smart-watch' className=' mx-auto mt-2'/>
// <h3 className='mt-3'>T10 Ultra Smartwatch 2.09inch HD Big Screen Magnetic Wireless Charging Wacth 8 49mm Smart Watch </h3>
// <h4 className='mt-5 text-sky-500'>Rs. 5,000</h4>
// </Link>

// <Link href="" className='text-lg mt-3 mx-10 text-black sm:mt-3 sm:mx-10 hover:shadow-2xl '>
// <Image src={frying_pan} alt='Frying-pan' className=' mx-auto mt-2'/>
// <h3 className='mt-3'> Sonex Non Stick Fry Pan 22 cm</h3>
// <h4 className='mt-5 text-sky-500'>Rs. 1,000</h4>
// </Link>

// <Link href="" className='text-lg mt-3 mx-10 text-black sm:mt-3 sm:mx-10 hover:shadow-2xl '>
// <Image src={milk_pan} alt='Milk-pan' className=' mx-auto mt-2'/>
//  <h3 className='mt-3'> Sonex Non Stick Classic Milk Pan </h3>
//  <h4 className='mt-5 text-sky-500'> Rs. 1,200 </h4>
// </Link>

// <Link href="" className='text-lg mt-3 mx-10 text-black sm:mt-3 sm:mx-10 hover:shadow-2xl '>
// <Image src={notebook} alt='Notebook' className=' mx-auto mt-2'/>
// <h3 className='mt-3'> Subject Notebook </h3>
// <h4 className='mt-5 text-sky-500'>  Rs. 300 </h4>
// </Link>

// <Link href="" className='text-lg mt-3 mx-10 text-black sm:mt-3 sm:mx-10 hover:shadow-2xl '>
// <Image src={pen_holder} alt='Pen-holder' className=' mx-auto mt-2'/>
// <h3 className='mt-3'> Pen Stand Round Stand Round Jar - Stationary Holder </h3>
// <h4 className='mt-5 text-sky-500'>  Rs. 300 </h4>
// </Link>

// <Link href="" className='text-lg mt-3 mx-10 text-black sm:mt-3 sm:mx-10 hover:shadow-2xl '>
// <Image src={plants} alt='Artificial-plants' className=' mx-auto mt-2'/>
// <h3 className='mt-3'> Pack of 6 Mini Artificial Plant Decoration Piece with pot </h3>
// <h4 className='mt-5 text-sky-500'> Rs. 300</h4>
// </Link>

// <Link  href="" className='text-lg mt-3 mx-10 text-black sm:mt-3 sm:mx-10 hover:shadow-2xl '>
// <Image src={bedsheet} alt='Bedsheet' className=' mx-auto mt-2'/>
// <h3 className='mt-3'> 3 Piece Embroided Double Bedsheet Set </h3>
// <h4 className='mt-5 text-sky-500'> Rs. 1,200</h4>
// </Link>