import Image from 'next/image'
import React from 'react'

import { sns } from '@/data'

function Hero() {
  return (
    <section className='px-20 py-section'>
      <div className='px-8 flex'>
        <div className='pt-[7.938rem]'>
          <div className='pt-5 tracking-tight'>
            <div className='text-5xl/14'><span>Hello I am</span> <span className='font-bold'>Flora Sheen.</span></div>
            <div className='text-5xl/14 pt-5 font-bold'><span>Frontend</span><span className='text-stroke text-white'> Developer</span></div>
            <div className='text-5xl/14 pt-5'>Based in <span className='font-bold'>India.</span></div>
            <p className='py-8 text-base tracking-normal'>I&apos;m Flora Sheen Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
          </div>
          <ul className='pt-12 flex gap-8'>
            { sns.map((item: {src: string, alt: string}, idx: number) => (
              <li
                key={idx}
                className={`w-14 h-14 rounded-lg flex justify-center items-center border-2 border-black ${item.alt === 'facebook' ? 'bg-black' : ''}`}>
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
        />
      </div>
    </section>
  )
}

export default Hero