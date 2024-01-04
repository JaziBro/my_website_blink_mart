'use client'
import React from 'react'
import electronics from '../../../public/electronics.jpg'
import Image from 'next/image'
import kitchen from '../../../public/kitchen_accesories.jpeg'
import stationary from '../../../public/stationary_items.jpg'
import furniture from '../../../public/furniture.jpeg'
import books from '../../../public/books.jpeg'
import home_decor from '../../../public/home_decor.jpeg'
import { useRouter } from 'next/navigation'

const Categories = () => {

  const buy = true
  const {push} = useRouter()

  const handleRedirect = ()  => {
    if (buy){
      push("/categories/electronics")
    }
  }
  const handleRedirect2 = ()  => {
    if (buy){
      push("/categories/kitchen")
    }
  }
  const handleRedirect3 = ()  => {
    if (buy){
      push("/categories/stationary")
    }
  }
  const handleRedirect4 = ()  => {
    if (buy){
      push("/categories/furniture")
    }
  }
  const handleRedirect5 = ()  => {
    if (buy){
      push("/categories/books")
    }
  }
  const handleRedirect6 = ()  => {
    if (buy){
      push("/categories/home_decor")
    }
  }

  return (
    <div className='text-center text-3xl mt-5'>
        Categories
      <div className='w-full grid lg:grid-cols-6 grid-flow-row md:grid-cols-3 sm:grid-cols-2 gap-1 mt-3'>
        <button onClick={handleRedirect} className='text-lg mt-3 mx-10 text-yellow-400 bg-sky-400 sm:mt-3 sm:mx-10 hover:shadow-2xl '>
            <Image src={electronics} alt='electronics' className='w-24 h-24 mx-auto mt-2'/>
            Electronic items
        </button>
        <button onClick={handleRedirect2} className= 'text-lg mt-3 mx-10 text-yellow-400 bg-sky-400 sm:mt-3 sm:mx-10 hover:shadow-2xl'>
            <Image src={kitchen} alt='kitchen' className='w-24 h-24 mx-auto mt-2'/>
            Kitchen Accesories
        </button>
        <button onClick={handleRedirect3} className=' text-lg mt-3 mx-10 text-yellow-400 bg-sky-400 sm:mt-3 sm:mx-10 hover:shadow-2xl'>
            <Image src={stationary} alt='stationary' className='w-24 h-24 mx-auto mt-2'/>
            Stationary Items
        </button>
        <button onClick={handleRedirect4} className='text-lg mt-3 mx-10 text-yellow-400 bg-sky-400 sm:mt-3 sm:mx-10 hover:shadow-2xl'>
            <Image src={furniture} alt='furniture' className='w-24 h-24 mx-auto mt-2'/>
            Furniture
        </button>
        <button onClick={handleRedirect5} className='text-lg mt-3 mx-10 text-yellow-400 bg-sky-400 sm:mt-3 sm:mx-10 hover:shadow-2xl'>
            <Image src={books} alt='books' className='w-24 h-24 mx-auto mt-2'/>
            Books
        </button>
        <button onClick={handleRedirect6} className='text-lg mt-3 mx-10 text-yellow-400 bg-sky-400 sm:mt-3 sm:mx-10 hover:shadow-2xl'>
            <Image src={home_decor} alt='home decor' className='w-24 h-24 mx-auto mt-2'/>
            Home Decor
        </button>
      </div>
    </div>

  )
}

export default Categories