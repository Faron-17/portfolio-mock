import React from 'react'

import { myTestimonial } from '@/data'
import Image from 'next/image'

function MyTestimonial() {
  return (
    <section className='px-20 py-section max-xl:px-4'>
      <h1 className='text-5xl/14 text-center py-5 max-sm:text-[1.75rem]/8'>My <span className='font-extrabold'>Testimonial</span></h1>
      <ul className='grid grid-flow-row grid-cols-3 gap-10 mt-5 py-10 mx-8 px-6 max-lg:px-5 max-sm:mx-0 max-sm:flex-col max-lg:grid-cols-1 max-sm:py-5 max-sm:mt-0'>
        {myTestimonial.map((item: {name: string, text: string, role: string, src: string}, idx: number) => (
          <li key={idx} className={`h-[24.875rem] rounded-2xl shadow-lg p-10 flex flex-col items-center ${ idx%2 !== 0 ? 'bg-black text-white' : 'text-neutral'} max-sm:p-6 max-sm:h-auto`}>
            <Image
              src={item.src}
              alt={item.src}
              width={96}
              height={96}
            />
            <span className='pt-6 text-base/5 text-center'>{item.text}</span>
            <span className={`mt-6 border-1 w-32 h-0 ${ idx%2 !== 0 ? 'border-white' : 'border-black' }`}></span>
            <span className='pt-6 font-semibold text-xl/6'>{item.name}</span>
            <span className={`pt-6 font-semibold text-base/6 ${ idx%2 === 0 ? 'text-zinc-500' : ''} max-sm:text-base/5`}>{item.role}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default MyTestimonial