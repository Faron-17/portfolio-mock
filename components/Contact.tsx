import React from 'react'
import ContactForm from './ContactForm'

function Contact() {
  return (
    <section id='contact-me' className='py-section px-28 max-sm:px-4 max-w-[1280px]'>
      <div className='grid grid-cols-2 items-center py-5 h-[30.25rem] max-lg:grid-cols-1 max-lg:h-auto max-sm:py-0'>
        <div className='pr-[6.75rem] max-lg:pr-0'>
          <ContactForm />
        </div>
        <div className='py-[4.125rem] max-sm:py-5'>
          <h1 className='text-5xl/14 font-extrabold leading-16 tracking-tight max-sm:text-[1.75rem]/11 max-sm:py-5'>Let&apos;s <span className='text-stroke text-white'>talk</span> for<br /> Something special</h1>
          <p className='pt-5 text-zinc-500 text-base max-sm:pt-1'>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
          <p className='pt-8 text-[1.75rem] font-semibold max-sm:text-xl/6'>Youremail@gmail.com</p>
          <p className='pt-2 text-[1.75rem] font-semibold max-sm:text-xl/6 max-sm:pt-3'>1234567890</p>
        </div>
      </div>
    </section>
  )
}

export default Contact