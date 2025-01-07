import { assets, serviceData } from '@/public/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div className='max-w-7xl mx-auto mt-20 md:px-5 flex flex-col items-center '>
        <h3 className='mb-2'>What i offer</h3>
        <h4 className='text-5xl mb-5 leading-8 text-neutral-500'>My Services</h4>
        <p className='text-sm text-neutral-700 mb-10 text-center text-balance'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos facere odio consequuntur iusto esse sapiente eligendi quia ab ducimus voluptas.</p>
        <div className='md:flex-row flex  flex-col  gap-5'>
            {serviceData.map((service,idx)=>(
                <div key={idx} className='border border-neutral-400 rounded-lg px-7 py-10 flex-1'>
                    <Image  src={service.icon} alt='service' className='w-10 mb-5'/>
                    <h2 className='text-xl font-medium mb-2'>{service.title}</h2>
                    <p className='text-sm text-neutral-400 text-pretty mb-5'>{service.description}</p>
                    <a className='flex gap-3 p-3 items-center justify-center border border-neutral-500 rounded-lg' href={service.link}>Read more
                        <Image src={assets.arrow_icon} alt='arrow' className='w-4'/>
                    </a>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Services