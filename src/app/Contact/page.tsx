import React from 'react'
import Contact_form from './Contact_form'

const page = () => {
  return (
    <div className='max-w-3xl mx-auto p-4'>
       <h1 className='font-bold mt-10 text-center text-3xl'> Contact Us! </h1>
       <p className='text-center '> Please fill the form below </p>
       
       <Contact_form/>
      
    </div>
  )
}

export default page