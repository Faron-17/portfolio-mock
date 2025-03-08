import React from 'react'

import { myProjects } from '@/data';
import Image from 'next/image';
import Link from 'next/link';

function MyProjects() {
  return (
    <section className='bg-black px-20 py-section'>
      <h1 className='text-center text-5xl/14 text-white py-5'>My <span className='font-extrabold'>Projects</span></h1>
      <ul className='pt-16 mx-8'>
        {myProjects.map((item: {title: string, text: string, src: string}, idx: number) => (
          <li key={idx} className={`h-[32.25rem] text-white flex gap-x-10 ${idx%2 !== 0 ? 'flex-row-reverse' : ''}`}>
            <div className='w-[37.125rem]'>
              <div className='w-full h-[24.813rem] bg-[url(/my-project-01.png)] object-cover bg-no-repeat'></div>
            </div>
            <div className={`w-[36.375rem] ${idx%2 !== 0 ? 'pt-6':'pt-12'}`}>
              <h1>
                <span className='flex flex-col'><span className='text-5xl font-bold inline-block'>0{idx+1}</span>
                <span className='text-3xl font-bold pt-7 inline-block'>{item.title}</span></span>
              </h1>
              <p className='pt-7 text-zinc-500'>I am Faron Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
              <Link href={''} className='hover:cursor-pointer'>
                <Image
                  src='/icon-link.svg'
                  alt='icon-link'
                  width={20}
                  height={20}
                  className='mt-5'
                />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default MyProjects