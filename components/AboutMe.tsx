import Image from 'next/image'
import React from 'react'

function AboutMe() {
  return (
    <section className='mx-20 px-8 py-section flex items-center mb-1'>
      <Image
        src='/about-me.svg'
        alt='about-me'
        width={518}
        height={592}
      />
      <div className='pl-[5.478rem] h-fit pb-11'>
        <h1 className='text-5xl text-left py-5'>About <span className='font-extrabold'>Me</span></h1>
        <p className='pt-5 text-zinc-900'>I&apos;m a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</p>
        <p className='pt-5 text-zinc-900'>I began my journey as a web developer in 2015, and since then, I&apos;ve continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I&apos;m building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.</p>
        <p className='pt-5 text-zinc-900'>When I&apos;m not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.</p>
      </div>
    </section>
  )
}

export default AboutMe