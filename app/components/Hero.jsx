import { assets } from '@/public/assets/assets'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className='flex justify-center mt-16 max-sm:mt-5'>
            <Image className='w-40' src={assets.profile_img} alt='profileimg' />
        </div>
            <h4 className='mt-5 mb-7 max-sm:mb-3 text-xl font-medium flex gap-3 justify-center items-center'>Hi! i'm William Mark
                <Image src={assets.hand_icon} alt='handicon' className='w-6' />
            </h4>
            <h2 className='text-4xl leading-8 text-center text-balance max-sm:text-2xl max-sm:font-medium max-sm:mb-2 mb-4'>Frontend web developer based in London.</h2>
            <p className='text-balance text-center text-sm text-neutral-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem obcaecati pariatur sunt.</p>
        <div className='flex justify-center mt-7 gap-5 max-sm:flex-col'>
            <a className='px-10 py-5 flex max-sm:justify-center items-center gap-3 border border-neutral-500 rounded-full hover:bg-black hover:text-white duration-500 ease-in'  href="">
                Contact
                <Image className='w-5  ' src={assets.right_arrow_bold} alt='rightArrow'/>
            </a>
            <a className='px-10 py-5 flex max-sm:justify-center items-center gap-3 border border-neutral-500 rounded-full hover:bg-black hover:text-white duration-500 ease-in'  href="/public/sample-resume.pdf" download>
                Mu resume
                <Image className='w-5  ' src={assets.download_icon} alt='downloadicon'/>
            </a>
        </div>
    </div>
  )
}

export default Hero