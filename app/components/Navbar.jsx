'use client'

import { assets } from '@/public/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Navbar = () => {
    const ulLinks = ['Home','About me','Services','My Work','Contact me']
    const [menuState,setMenuState] = useState('64')
  return (
    <>
        <div className='fixed  -z-10'>
            <Image className='w-full  top-0 translate-x-36 bg-contain' src={assets.header_bg_color} alt='bg' />
        </div>
        <nav className='max-w-7xl mx-auto   z-10 py-5 flex justify-between items-center'>
        <a href="#">
            <Image src={assets.logo} alt='logo' className='w-28'/>
        </a>
        <ul className='hidden md:flex gap-7 font-medium bg-white shadow-sm p-5 rounded-md'>
            {ulLinks.map((link,idx)=>(
                <li key={idx}>{link}</li>
            ))}
        </ul>

        <div className='flex gap-7'>
            <button><Image src={assets.moon_icon} alt='darkmode' className='w-6'/></button>
            <button onClick={e=>setMenuState('0')} className='md:hidden'><Image src={assets.menu_black} alt='menuIcon' className='w-5'/></button>
            <a href="" className='hidden md:flex gap-4 px-10 border rounded-full font-medium border-neutral-500 py-2.5'>
                Contact
                <Image src={assets.arrow_icon} alt='arrow' className='w-6'/>
            </a> 
        </div>
        
    </nav>
              
        {/* menu for phone */}
        <div className={`bg-rose-50 w-64 h-screen fixed -right-${menuState} bottom-0 top-0 z-50 px-10 py-20`}>
            <div>
                <Image onClick={e=>setMenuState('64')} src={assets.close_black} alt='close' className='w-5 absolute right-8 top-8 cursor-pointer  '/>    
            </div>  
            <ul className='flex flex-col md:hidden gap-4 font-medium'>
                {ulLinks.map((link,idx)=>(
                    <li key={idx}>{link}</li>
                ))}
            </ul>
        </div>
    </>    
)
}

export default Navbar