import Image from 'next/image'
import React from 'react'

import { mySkills } from '@/data'

function MySkills() {
  return (
    <section className='px-20 py-section max-lg:px-4'>
      <h1 className='text-center text-5xl/14 py-5 max-sm:text-[1.75rem]/8'>My <span className='font-extrabold'>Skills</span></h1>
      <ul className='py-10 grid grid-flow-row grid-cols-5 gap-x-[4.469rem] gap-y-10 px-8 mt-5 max-xl:grid-cols-3 max-md:gap-5 max-sm:grid-cols-2 max-sm:pt-5 max-sm:pb-0 max-xl:px-0 max-sm:mt-0 max-xl:w-fit max-xl:mx-auto'>
        { mySkills.map((item: {title: string, src: string, alt: string}, idx: number) => (
          <li
            key={idx}
            className={`w-[11.625rem] h-[11.625rem] border-2 border-black rounded-sm flex flex-col justify-center items-center
                        ${item.title === 'JavaScript' ? 'bg-black text-white' : ''} max-sm:w-[10rem] max-sm:h-[10rem]`}>
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