import Image from 'next/image'
import React from 'react'

import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { FaPython, FaAws, FaJava, FaReact } from "react-icons/fa";
import { DiJqueryLogo, DiMongodb } from "react-icons/di";

function Skills() {
  return (
    <section className='px-20 pb-28'>
      <h1 className='text-center text-5xl'>My <span className='font-extrabold'>Skills</span></h1>
      <div className='pt-16 grid grid-flow-row grid-cols-5 gap-10 px-8'>
        <div className='w-[188px] h-[188px] border-2 border-black rounded-sm flex flex-col justify-center items-center'>
          <Image
            src='/icon-git.svg'
            alt='git'
            width={44}
            height={44}
          />
          <span className='text-xl font-bold pt-8'>Git</span>
        </div>
        <div className='w-[188px] h-[188px] border-2 border-black rounded-sm flex flex-col justify-center items-center'>
          <DiJqueryLogo
            className='w-11 h-11'
          />
          <span className='text-xl font-bold pt-8'>jQuery</span>
        </div>
        <div className='w-[188px] h-[188px] border-2 border-black rounded-sm flex flex-col justify-center items-center'>
          <Image
            src='/icon-sass.svg'
            alt='sass'
            width={44}
            height={44}
          />
          <span className='text-xl font-bold pt-8'>Sass/Scss</span>
        </div>
        <div className='w-[188px] h-[188px] border-2 border-black rounded-sm flex flex-col justify-center items-center'>
          <FaPython
            className='w-11 h-11'
          />
          <span className='text-xl font-bold pt-8'>Python</span>
        </div>
        <div className='w-[188px] h-[188px] border-2 border-black rounded-sm flex flex-col justify-center items-center'>
          <FaAws
            className='w-11 h-11'
          />
          <span className='text-xl font-bold pt-8'>AWS</span>
        </div>
        <div className='w-[188px] h-[188px] border-2 border-black rounded-sm flex flex-col justify-center items-center'>
          <RiTailwindCssFill
            className='w-11 h-11'
          />
          <span className='text-xl font-bold pt-8'>Tailwind css</span>
        </div>
        <div className='w-[188px] h-[188px] border-2 border-black rounded-sm flex flex-col justify-center items-center'>
          <FaJava
            className='w-11 h-11'
          />
          <span className='text-xl font-bold pt-8'>Java</span>
        </div>
        <div className='w-[188px] h-[188px] border-2 border-black rounded-sm flex flex-col justify-center items-center bg-black'>
          <FaReact
            className='w-11 h-11 stroke-white fill-white'
          />
          <span className='text-xl font-bold pt-8 text-white'>React</span>
        </div>
        <div className='w-[188px] h-[188px] border-2 border-black rounded-sm flex flex-col justify-center items-center'>
          <RiNextjsLine
            className='w-11 h-11'
          />
          <span className='text-xl font-bold pt-8'>Next.js</span>
        </div>
        <div className='w-[188px] h-[188px] border-2 border-black rounded-sm flex flex-col justify-center items-center'>
          <DiMongodb
            className='w-11 h-11'
          />
          <span className='text-xl font-bold pt-8'>Mongo DB</span>
        </div>
      </div>
    </section>
  )
}

export default Skills