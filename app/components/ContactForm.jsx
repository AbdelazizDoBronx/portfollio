import { assets } from '@/public/assets/assets'
import Image from 'next/image'
import React from 'react'

const ContactForm = () => {
  return (
    <div className='max-w-7xl mx-auto mt-16'>
        <h3 className='text-sm text-center mb-3 text-neutral-500'>Connect with me</h3>
        <h2 className='text-5xl font-medium text-center'>Get in touch</h2>
        <p className='mt-2 mb-6 text-sm  text-balance text-center text-neutral-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi adipisci cum, rerum quis provident et corporis doloribus veniam facere rem.</p>
        <form  >
            <div className='flex gap-1 justify-center'>
                <input className='border bg-transparent focus:outline-blue-300 border-neutral-500 px-10 py-4 rounded-md' type="text" placeholder='enter your name'/>
                <input className='border bg-transparent focus:outline-blue-300 border-neutral-500 px-10 py-4 rounded-md' type="text" placeholder='enter your email'/>
            </div>
            <div className=' mt-1 flex justify-center items-center'>
                <input className='border bg-transparent focus:outline-blue-300 border-neutral-500 mx-auto px-48 py-28 rounded-md' type="text" placeholder='Feel free'/>
            </div>
            <button className='flex gap-3 bg-black text-white justify-center items-center px-3 py-5 rounded-md mt-3 mx-auto w-1/3 shadow-lg'>
                Submit now
                <Image src={assets.right_arrow_white} alt='send' className='w-5'/>
            </button>
        </form>
    </div>
  )
}

export default ContactForm