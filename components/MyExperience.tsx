import React from 'react'

import { myExperience } from '@/data';
import Image from 'next/image';

function MyExperience() {
  return (
    <section className='bg-black px-20 py-section max-sm:px-4'>
      <h1 className='text-center text-5xl/14 text-white py-5 max-sm:text-[1.75rem]/8'>My <span className='font-extrabold'>Experience</span></h1>
      <ul className='py-10 mt-5 flex flex-col gap-y-[2.188rem] mx-8 px-6 max-sm:py-0 max-xl:px-0 max-xl:mx-0 max-sm:gap-5'>
        {myExperience.map((item: {src: string, alt: string, title: string, duration: string, text: string}, idx: number) => (
          <li key={idx} className={`border-zinc-500 rounded-xl border-1 py-8 px-6 pb-7 text-white  ${idx%2 === 1 ? 'bg-zinc-800 border-zinc-800' : ''} max-sm:py-[1.875rem] max-sm:px-6`}>
            <div className='flex justify-between max-sm:flex-col'>
              <div className='flex'>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={32}
                  height={32}
                />
                <h2 className='text-2xl/7 font-semibold pl-[1.875rem] items-center tracking-tight max-sm:text-xl/6'>{item.title}</h2>
              </div>
              <span className='text-zinc-300 font-semibold max-sm:pt-[1.875rem] max-sm:text-base/5'>{item.duration}</span>
            </div>
            <p className='pt-6 text-base tracking-wide text-zinc-300'>{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default MyExperience