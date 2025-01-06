import { assets, infoList, toolsData } from '@/public/assets/assets'
import Image from 'next/image'
import React from 'react'

const AboutMe = () => {
  return (
    <div className='mt-20 max-w-7xl mx-auto'>
        <p className='text-center text-neutral-500'>Introduction</p>
        <h2 className='text-center text-5xl font-semibold leading-8 mt-2 mb-8'>About me</h2>
        <div className='flex gap-10  max-md:px-2 max-md:flex max-md:flex-col max-md:items-center'>
            <div className='w-64'>
                <Image className='w-full' src={assets.profile_img} alt='profileimg'/>
            </div>
            <div className='flex-1'>
                <p className='text-sm text-neutral-700 text-pretty max-w-2xl max-md:text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus officia veritatis numquam laborum eius odio? Similique iure delectus odit possimus.</p>
                <div className='max-md:flex-col flex items-center justify-center gap-5 mb-7 mt-4'>
                    {infoList.map((info,idx)=>(
                        <div className='max-md:w-full border border-neutral-400 flex-1 rounded-lg px-5 py-10' key={idx}>
                            <Image className='w-6 mb-3' src={info.icon} alt={info.title}/>
                            <h2 className='text-sm font-medium'>{info.title}</h2>
                            <p className='text-sm text-neutral-500 mt-2 text-pretty'>{info.description}</p>
                        </div>
                    ))}
                </div>
                <p className='text-xl font-light mb-3'>Tools I use</p>
                <div className='flex gap-4 max-md:justify-start'>
                    {toolsData.map((tool,idx)=>(
                        <div className='border border-neutral-300 rounded-full  p-4 flex justify-center items-center' key={idx}>
                            <Image className='w-6' src={tool} alt='tool'/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMe