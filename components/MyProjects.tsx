import React from 'react'

import { myProjects } from '@/data';
import Image from 'next/image';
import Link from 'next/link';

function MyProjects() {
  return (
    <section id='my-projects' className='bg-black px-20 py-section max-lg:px-4 w-full flex justify-center'>
      <div className='max-w-[1280px] w-full'>
        <h1 className='text-center text-5xl/14 text-white py-5 max-sm:text-[1.75rem]/8'>My <span className='font-extrabold'>Projects</span></h1>
        <ul className='pt-5 mx-8 flex flex-col gap-5 max-sm:mx-0 max-sm:gap-7'>
          {myProjects.map((item: {title: string, text: string}, idx: number) => (
            <li key={idx} className={`h-[32.25rem] text-white flex items-center gap-x-10 ${idx%2 !== 0 ? 'flex-row-reverse' : ''} max-lg:flex-col max-lg:h-auto`}>
              <div className={`w-[37.125rem] max-sm:w-full ${idx%2 != 0 ? 'flex justify-end' : ''}`}>
                <div className={`w-[33.125rem] h-[24.813rem] bg-my-project-${idx+1} rounded-2xl max-lg:w-full`}></div>
              </div>
              <div className='w-[36.375rem] max-sm:w-auto max-sm:pt-7'>
                <h1>
                  <span className='flex flex-col'><span className='text-5xl/14 font-bold inline-block max-sm:text-2xl/7'>0{idx+1}</span>
                  <span className='text-[2rem]/10 font-bold pt-7 inline-block tracking-tight max-sm:text-xl/6'>{item.title}</span></span>
                </h1>
                <p className='pt-7 text-zinc-500'>{item.text}</p>
                <Link href={''} className='hover:cursor-pointer'>
                  <Image
                    src='/icon-link.svg'
                    alt='icon-link'
                    width={20}
                    height={20}
                    className='mt-7'
                  />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default MyProjects