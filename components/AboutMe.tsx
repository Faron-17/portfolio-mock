import Image from 'next/image'
import React from 'react'

function AboutMe() {
  return (
    <section className='px-24 py-28 flex items-center'>
      <Image
        src='/about-me.svg'
        alt='about-me'
        width={518}
        height={592}
      />
      <div className='pl-28'>
        <h1 className='text-5xl text-left'>About <span className='font-bold'>Me</span></h1>
        <p className='pt-10 text-zinc-900'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor vel ipsum non pretium. Aliquam ultrices purus euismod lorem facilisis placerat. In hac habitasse platea dictumst. Pellentesque aliquam mollis augue eu vehicula. Fusce fringilla consequat elit, vel blandit justo cursus sed. Nullam mattis enim mauris. Maecenas tristique id lectus id feugiat. Praesent vel massa nec ante tincidunt semper. Nam turpis urna, sagittis non felis vitae, elementum pulvinar justo. Donec a felis sed neque lobortis sollicitudin nec eu sapien. Etiam et aliquam quam. Sed eleifend, felis eu imperdiet lacinia, tortor odio efficitur ipsum, eget bibendum nibh tellus ut velit.</p>
        <p className='pt-10 text-zinc-900'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor vel ipsum non pretium. Aliquam ultrices purus euismod lorem facilisis placerat. In hac habitasse platea dictumst. Pellentesque aliquam mollis augue eu vehicula.</p>
      </div>
    </section>
  )
}

export default AboutMe