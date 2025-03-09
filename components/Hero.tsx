import Image from 'next/image'
import React from 'react'

import { sns } from '@/data'

function Hero() {
  return (
    <section className='px-20 py-section max-lg:px-4'>
      <div className='px-8 flex max-lg:flex-col-reverse max-xl:px-0'>
        <div className='pt-[7.938rem] max-sm:pt-12 max-sm:pb-[1.875rem]'>
          <div className='pt-5 tracking-tight text-5xl/14 max-sm:pt-0 max-sm:text-[1.75rem]/8 max-sm:tracking-normal'>
            <div><span>Hello I am</span> <span className='font-bold'>Flora Sheen.</span></div>
            <div className='pt-5 font-bold max-sm:pt-3'><span>Frontend</span><span className='text-stroke text-white'> Developer</span></div>
            <div className='pt-5 max-sm:pt-3'>Based in <span className='font-bold'>India.</span></div>
            <p className='py-8 text-base tracking-normal max-sm:tracking-wide'>I&apos;m Flora Sheen Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
          </div>
          <ul className='pt-12 flex gap-8 max-sm:py-1 max-sm:gap-6'>
            { sns.map((item: {src: string, alt: string}, idx: number) => (
              <li
                key={idx}
                className={`w-14 h-14 rounded-lg flex justify-center items-center border-2 border-black ${item.alt === 'facebook' ? 'bg-black' : ''} max-sm:w-12 max-sm:h-12`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  height={20}
                  width={20}
                />
              </li>
            )) }
          </ul>
        </div>
        <Image
          src='/wm_banner.svg'
          alt='vm_banner'
          height={630}
          width={630}
          className='max-sm:p-[0.313rem] self-center'
        />
      </div>
    </section>
  )
}

export default Hero