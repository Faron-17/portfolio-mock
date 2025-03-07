import React from 'react'
import ContactForm from './ContactForm'
import Image from 'next/image'

function Contact() {
  return (
    <section className='py-20 px-28 flex'>
      <div className='pr-[108px]'>
        <div className='w-[500px]'>
          <ContactForm />
          <div className='flex pt-6 gap-4'>
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
      </div>
      <div>
        <h1 className='text-5xl font-extrabold leading-16'>Let&apos;s <span className='text-stroke text-white'>talk</span> for<br /> Something special</h1>
        <p className='pt-5 text-zinc-500 text-base'>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
        <p className='pt-10 text-2xl font-semibold'>Youremail@gmail.com</p>
        <p className='pt-4 text-2xl font-semibold'>1234567890</p>
      </div>
    </section>
  )
}

export default Contact