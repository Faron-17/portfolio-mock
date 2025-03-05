import React from 'react'

import { navItems } from '@/data';
import Link from 'next/link';
import Image from 'next/image';


function Header() {
  return (
    <div className='h-[104px] px-28 py-6 flex justify-between'>
      <Image
        src='/header-logo.svg'
        alt='header-logo'
        width={140}
        height={40}
      />
      <ul className='flex gap-8 w-fit'>
        {navItems.map((navItem: {link: string, name: string}, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className='w-fit flex items-center'
          >
            <span className='text-xl font-semibold leading-[24px]'>{navItem.name}</span>
          </Link>
        ))}
      </ul>
      <button className='bg-black h-14 w-[153px] flex justify-center items-center gap-2 rounded-lg'>
        <span className='text-white text-xl font-semibold leading-[24px]'>
          Resume
        </span>
        <Image
          src='/download.svg'
          alt='download'
          width={20}
          height={20}
        />
      </button>
    </div>
  )
}

export default Header