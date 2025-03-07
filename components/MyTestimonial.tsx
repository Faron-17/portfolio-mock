import React from 'react'

import { myTestimonial } from '@/data'
import Image from 'next/image'

function MyTestimonial() {
  return (
    <section className='px-28 py-28'>
      <h1 className='text-5xl text-center'>My <span className='font-extrabold'>Testimonial</span></h1>
      <ul className='grid grid-flow-row grid-cols-3 gap-10 pt-16'>
        {myTestimonial.map((item: {name: string, text: string, role: string, src: string}, idx: number) => (
          <li key={idx} className={`rounded-xl shadow-md shadow-lg p-10 flex flex-col items-center ${ idx%2 !== 0 ? 'bg-black text-white' : 'text-neutral'}`}>
            <Image
              src={item.src}
              alt={item.src}
              width={96}
              height={96}
            />
            <span className='pt-6 text-base'>{item.text}</span>
            <span className={`mt-6 border-1 w-32 h-0 ${ idx%2 !== 0 ? 'border-white' : 'border-black' }`}></span>
            <span className='pt-6 font-semibold text-xl'>{item.name}</span>
            <span className={`pt-6 font-semibold ${ idx%2 === 0 ? 'text-zinc-500' : ''}`}>{item.role}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default MyTestimonial