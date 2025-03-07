import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <footer className='h-28 bg-black w-full px-28 py-8 flex justify-between'>
      <Image
        src='/footer-logo.svg'
        alt='footer-logo'
        width={140}
        height={40}
      />
      <div className='text-white text-base flex flex-col text-right'>
        <span>@ 2019-2023 Personal</span>
        <span className='pt-3'>Made In Figma</span>
      </div>
    </footer>
  )
}

export default Footer