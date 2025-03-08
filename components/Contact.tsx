import React from 'react'
import ContactForm from './ContactForm'

function Contact() {
  return (
    <section className='py-section px-28'>
      <div className='grid grid-cols-2 items-center py-5 h-[30.25rem]'>
        <div className='pr-[6.75rem]'>
            <ContactForm />
        </div>
        <div className='py-[4.125rem]'>
          <h1 className='text-5xl/14 font-extrabold leading-16 tracking-tight'>Let&apos;s <span className='text-stroke text-white'>talk</span> for<br /> Something special</h1>
          <p className='pt-5 text-zinc-500 text-base'>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
          <p className='pt-10 text-2xl font-semibold'>Youremail@gmail.com</p>
          <p className='pt-4 text-2xl font-semibold'>1234567890</p>
        </div>
      </div>
    </section>
  )
}

export default Contact