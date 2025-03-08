import Image from 'next/image'
import React from 'react'

import { mySkills } from '@/data'

function MySkills() {
  return (
    <section className='px-20 py-section'>
      <h1 className='text-center text-5xl/14 py-5'>My <span className='font-extrabold'>Skills</span></h1>
      <ul className='py-10 grid grid-flow-row grid-cols-5 gap-x-[4.469rem] gap-y-10 px-8 mt-5'>
        { mySkills.map((item: {title: string, src: string, alt: string}, idx: number) => (
          <li
            key={idx}
            className={`w-[11.625rem] h-[11.625rem] border-2 border-black rounded-sm flex flex-col justify-center items-center
                        ${item.title === 'JavaScript' ? 'bg-black text-white' : ''}`}>
            <Image
              src={item.src}
              alt={item.alt}
              width={56}
              height={56}
            />
            <span className='text-xl font-bold pt-8'>{item.title}</span>
          </li>
        )) }

      </ul>
    </section>
  )
}

export default MySkills