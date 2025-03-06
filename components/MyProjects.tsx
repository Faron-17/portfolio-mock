import React from 'react'

import { myProjects } from '@/data';
import Image from 'next/image';
import Link from 'next/link';

function MyProjects() {
  return (
    <section className='bg-black px-28 py-28'>
      <h1 className='text-center text-5xl text-white'>My <span className='font-bold'>Projects</span></h1>
      <ul className='pt-16'>
        {myProjects.map((item: {title: string, text: string, src: string}, idx: number) => (
          <li key={idx} className={`py-8 px-6 text-white mt-8 flex ${idx%2 !== 0 ? 'flex-row-reverse':''}`}>
            <Image
              src={item.src}
              alt={item.src}
              width={530}
              height={397}
            />
            <div className={`w-[582px] ${idx%2 !== 0 ? 'pt-6':'pt-12'}`}>
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