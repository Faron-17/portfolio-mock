import Image from 'next/image'
import React from 'react'

function AboutMe() {
  return (
    <section id='about-me' className='mx-20 px-8 py-section flex items-center mb-1 max-lg:flex-col max-sm:px-4 max-sm:mx-0 max-sm:mb-0 max-w-[1280px]'>
      <Image
        src='/about-me.svg'
        alt='about-me'
        width={518}
        height={592}
        className='hidden sm:block'
      />
      <Image
        src='/about-me-sp.svg'
        alt='about-me'
        width={325}
        height={367}
        className='hidden max-sm:block mt-0.5'
      />
      <div className='pl-[5.478rem] h-fit pb-11 max-lg:pl-0 max-sm:mt-5 max-sm:pb-0'>
        <h1 className='text-5xl text-left py-5 max-sm:text-[1.75rem]/8 max-sm:tracking-wide'>About <span className='font-extrabold'>Me</span></h1>
        <p className='pt-5 text-zinc-900'>I&apos;m a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</p>
        <p className='pt-5 text-zinc-900'>I began my journey as a web developer in 2015, and since then, I&apos;ve continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I&apos;m building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.</p>
        <p className='pt-5 text-zinc-900'>When I&apos;m not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.</p>
      </div>
    </section>
  )
}

export default AboutMe