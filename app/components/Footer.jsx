import { assets } from '@/public/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='max-w-7xl mx-auto mt-20 mb-10'>
        <div className='flex flex-col items-center'>
            <Image src={assets.logo} alt='logo' className='w-44'/>
            <p className='text-sm -mt-2 text-neutral-500 text-center'>www.williamDev.com</p>
        </div>
        <div className='w-full h-[0.5] bg-neutral-500 mt-7 mb-4'></div>
        <div className='flex justify-between'>
            <p className='font-medium'>2025 williamDev. All rights reserved</p>
            <ul className='flex gap-5 text-sm'>
                <li>Terms of Services</li>
                <li>Privacy Policy</li>
                <li>Connect with me</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer