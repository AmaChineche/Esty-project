"use client"
import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='bg-blue-300'>
      <div className=' relative bg-yellow-200 py-40 px-40 items-center justify-center  ' >
      <div className='font-semibold text-center text'>Fashion Favorites
      Outfits, accents, <br/> and so much more—find well-crafted pieces for every style and budget.</div>
      </div>
      <div className=' absolute bg-white grid grid-cols-6 gap-8 grid-rows-2'>
     <div>
     <div className='border border-blue-400 rounded-full w-48 h-48 overflow-hidden'><Image alt="Logo" src="/unsplash1.jpg" className='w-full h-full object-cover' width={250} height={350}/>
      
      </div>
      <p>Baby Clothing </p>
     </div>
     
      <div className='border border-blue-400 rounded-full w-48 h-48 overflow-hidden'><Image alt="Logo" src="/unsplash1.jpg" className='w-full h-full object-cover' width={250} height={350}/></div>
      <div className='border border-blue-400 rounded-full w-48 h-48 overflow-hidden'><Image alt="Logo" src="/unsplash1.jpg" className='w-full h-full object-cover' width={250} height={350}/></div>
      
      <div className='border border-blue-400 rounded-full w-48 h-48 overflow-hidden'><Image alt="Logo" src="/unsplash1.jpg" className='w-full h-full object-cover' width={250} height={350}/></div>
      <div className='border border-blue-400 rounded-full w-48 h-48 overflow-hidden'><Image alt="Logo" src="/unsplash1.jpg" className='w-full h-full object-cover' width={250} height={350}/></div>
      
      <div className='border border-blue-400 rounded-full w-48 h-48 overflow-hidden'><Image alt="Logo" src="/unsplash1.jpg" className='w-full h-full object-cover' width={250} height={350}/></div>
      <div className='border border-blue-400 rounded-full w-48 h-48 overflow-hidden'><Image alt="Logo" src="/unsplash1.jpg" className='w-full h-full object-cover' width={250} height={350}/></div>
      
      <div className='border border-blue-400 rounded-full w-48 h-48 overflow-hidden'><Image alt="Logo" src="/unsplash1.jpg" className='w-full h-full object-cover' width={250} height={350}/></div>
      <div className='border border-blue-400 rounded-full w-48 h-48 overflow-hidden'><Image alt="Logo" src="/unsplash1.jpg" className='w-full h-full object-cover' width={250} height={350}/></div>
      
      <div className='border border-blue-400 rounded-full w-48 h-48 overflow-hidden'><Image alt="Logo" src="/unsplash1.jpg" className='w-full h-full object-cover' width={250} height={350}/></div>
      <div className='border border-blue-400 rounded-full w-48 h-48 overflow-hidden'><Image alt="Logo" src="/unsplash1.jpg" className='w-full h-full object-cover' width={250} height={350}/></div>
      
      <div className='border border-blue-400 rounded-full w-48 h-48 overflow-hidden'><Image alt="Logo" src="/unsplash1.jpg" className='w-full h-full object-cover' width={250} height={350}/></div>
      
      </div>
    </div>
  )
}

export default Hero
