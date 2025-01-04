import { assets } from '@/public/assets/assets'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    const ulLinks = ['Home','About me','Services','My Work','Contact me']
  return (
    <nav className='max-w-7xl mx-auto py-5 flex justify-between items-center'>
        <a href="#">
            <Image src={assets.logo} alt='logo' className='w-28'/>
        </a>
        <ul className='hidden md:flex gap-7 font-medium'>
            {ulLinks.map((link,idx)=>(
                <li key={idx}>{link}</li>
            ))}
        </ul>
        <div className='hidden cursor-pointer lg:flex gap-3 border border-neutral-500 rounded-full py-2.5 px-10 font-semibold items-center'>
            Contact
            <Image src={assets.arrow_icon} alt='arrow' className='w-6'/>
        </div>
    </nav>
  )
}

export default Navbar