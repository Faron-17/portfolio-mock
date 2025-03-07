import React from 'react'

import { myExperience } from '@/data';

function Experience() {
  return (
    <section className='bg-black px-28 py-28'>
      <h1 className='text-center text-5xl text-white'>My <span className='font-extrabold'>Experience</span></h1>
      <ul className='pt-16'>
        {myExperience.map((item: {title: string, duration: string, text: string}, idx: number) => (
          <li key={idx} className={`border-zinc-300 rounded-xl border-2 py-8 px-6 text-white mt-8 ${idx%2 === 1 ? 'bg-zinc-300' : ''}`}>
            <div className='flex justify-between'>
              <h2 className='text-2xl font-semibold'>{item.title}</h2>
              <span>{item.duration}</span>
            </div>
            <p className='pt-7'>{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Experience