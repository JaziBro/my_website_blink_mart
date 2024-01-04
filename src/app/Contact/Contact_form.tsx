'use client'

import React from 'react'
import { useState } from 'react'

const Contact_form = () => {

    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e: any) => {
        e.preventDefault()

        console.log("Full name: ", fullname)
        console.log("Email: ", email)
        console.log("Message: ", message)
    }
  return (
    <>
      <form onSubmit={handleSubmit} className=' py-4 mt-4 border-t flex flex-col gap-5'>
        <div className='flex flex-col gap-2'>
            <label htmlFor="fullname"> Full Name</label>
            <input onChange={e => setFullname(e.target.value)} value={fullname} type="text" id='fullname' placeholder='Please enter your Full Name'/>
        </div>

        <div className='flex flex-col gap-2'>
            <label htmlFor="email">Email</label>
            <input onChange={e => setEmail(e.target.value)} value={email} type="text" id='email' placeholder='Please enter your Email' />
        </div>

        <div className='flex flex-col gap-2'>
            <label htmlFor="message"> Your Message</label>
            <textarea onChange={e => setMessage(e.target.value)} value={message} id='message' placeholder='Please type your Message' className='shadow-md px-6 py-2 border border-slate-300 h-32' />
        </div>

        <button type='submit' className='bg-sky-400 p-3 text-yellow-400 font-bold rounded-xl'> Send </button>
      </form>

    </>
  )
}

export default Contact_form