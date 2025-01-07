import { assets, workData } from '@/public/assets/assets'
import Image from 'next/image'
import React from 'react'

const Portfolio = () => {
  return (
    <div className='max-w-7xl mx-auto mt-16 flex flex-col items-center mb-20'>
        <h3 className='text-sm mb-21'>My Portfoloio</h3>
        <h4 className='text-5xl font-medium mb-3'>My Latest Work</h4>
        <p className='text-sm text-neutral-700 text-pretty text-center mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aperiam est ab dolor ipsam atque suscipit! Est dolorum non id.</p>
        <div className='flex  gap-5'>
            {workData.map((work,idx)=>(
                 <div style={{backgroundImage : `url(${work.bgImage})`}} key={idx} className='bg-no-repeat  bg-contain px-5 py-20 rounded-md flex-1'>
                    <div className=' mt-14 flex gap-3 items-center bg-white px-3 py-5 rounded-lg shadow-md'>
                        <div>
                            <h3 className='text-nowrap text-2xl font-medium'>{work.title}</h3>
                            <p className='text-sm mt-2'>{work.description}</p>
                        </div>
                        <Image className='w-5' src={assets.arrow_icon_dark} alt='arrow'/>
                    </div>
                 </div>
            ))}
        </div>
    </div>
  )
}

export default Portfolio