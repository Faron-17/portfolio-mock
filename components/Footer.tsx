import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <footer className='h-[6.25rem] bg-black px-20 py-6'>
      <div className='px-8 flex justify-between'>
        <Image
          src='/footer-logo.svg'
          alt='footer-logo'
          width={140}
          height={40}
        />
        <div className='text-white text-base/5 flex flex-col text-right font-semibold tracking-tight'>
          <span>@ 2019-2023 Personal</span>
          <span className='pt-3'>Made In Figma</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer