import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <section className='px-20'>
      <div className='px-8 flex'>
        <div className='py-32 w-[600px]'>
          <span className='text-5xl/18'>
            Hello, I am <span className='font-bold'>Faron. Frontend</span> <span>Developer</span> Based in Japan.
          </span>
          <p className='pt-8'>I&apos;m Faron. Sheen Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
          <div className='pt-14 flex gap-8'>
            <div className='w-14 h-14 bg-black rounded-lg flex justify-center items-center'>
              <Image
                src='/facebook.svg'
                alt='facebook'
                height={20}
                width={20}
              />
            </div>
            <div className='w-14 h-14 rounded-lg flex justify-center items-center border-2 border-black'>
              <Image
                src='/reddit.svg'
                alt='reddit'
                height={20}
                width={20}
              />
            </div>
            <div className='w-14 h-14 rounded-lg flex justify-center items-center border-2 border-black'>
              <Image
                src='/discord.svg'
                alt='discord'
                height={20}
                width={20}
              />
            </div>
          </div>
        </div>
        <Image
          src='/wm_banner.svg'
          alt='vm_banner'
          height={630}
          width={630}
        />
      </div>
    </section>
  )
}

export default Hero