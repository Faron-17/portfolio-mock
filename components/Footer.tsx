import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <footer className='h-[6.25rem] bg-black px-20 py-6 max-sm:px-4 max-sm:py-5 max-sm:h-20 w-full flex justify-center'>
      <div className='px-8 flex justify-between max-sm:px-0 max-w-[1280px] w-full'>
        <Image
          src='/footer-logo.svg'
          alt='footer-logo'
          width={140}
          height={40}
        />
        <div className='text-white text-base/5 flex flex-col text-right font-semibold tracking-tight max-sm:text-xs/5 max-sm:tracking-normal'>
          <span>@ 2019-2023 Personal</span>
          <span className='pt-3 max-sm:pt-0'>Made In Figma</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer