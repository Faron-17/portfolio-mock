'use client'

import React from 'react'
import { useState } from 'react';

import { navItems } from '@/data';
import Link from 'next/link';
import Image from 'next/image';


function Header() {
  const [isActive, setIsActive] = useState('')

  return (
    <header className='h-[6.5rem] mx-20 px-8 py-6 flex justify-between max-sm:px-4 max-sm:mx-0 max-sm:py-4 max-sm:h-[4.5rem] max-lg:mx-0 max-w-[1280px] w-full'>
      <Image
        src='/header-logo.svg'
        alt='header-logo'
        width={140}
        height={40}
      />
      <div className='hidden max-md:flex h-9 w-9 justify-center items-center'>
        <Image
          src='/menu.svg'
          alt='menu'
          width={27}
          height={18}
        />
      </div>
      <ul className='flex gap-8 w-fit max-md:hidden'>
        {navItems.map((navItem: {link: string, name: string}, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={`w-fit flex items-center h-fit my-4 border-2 ${isActive === navItem.link ? 'active border-black' : 'border-white'}`}
            onClick={() => setIsActive(navItem.link)}
          >
            <span className='text-xl font-semibold leading-6 tracking-tight'>{navItem.name}</span>
          </Link>
        ))}
      </ul>
      <button className='bg-black h-14 px-5 flex justify-center items-center gap-2 rounded-sm  max-md:hidden'>
        <span className='text-white text-xl font-semibold leading-6 tracking-wide'>
          Resume
        </span>
        <Image
          src='/download.svg'
          alt='download'
          width={20}
          height={20}
        />
      </button>
    </header>
  )
}

export default Header