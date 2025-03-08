import React from 'react'

import { myExperience } from '@/data';
import Image from 'next/image';

function MyExperience() {
  return (
    <section className='bg-black px-20 py-section'>
      <h1 className='text-center text-5xl/14 text-white py-5'>My <span className='font-extrabold'>Experience</span></h1>
      <ul className='py-10 mt-5 flex flex-col gap-y-8 mx-8 px-6'>
        {myExperience.map((item: {src: string, alt: string, title: string, duration: string, text: string}, idx: number) => (
          <li key={idx} className={`border-zinc-300 rounded-xl border-2 py-8 px-6 pb-7 text-white  ${idx%2 === 1 ? 'bg-zinc-300' : ''}`}>
            <div className='flex justify-between'>
              <div className='flex'>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={32}
                  height={32}
                />
                <h2 className='text-2xl/7 font-semibold pl-[1.875rem] items-center tracking-tight'>{item.title}</h2>
              </div>
              <span>{item.duration}</span>
            </div>
            <p className='pt-6 text-base tracking-wide'>{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default MyExperience