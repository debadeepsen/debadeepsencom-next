/* eslint-disable @next/next/no-img-element */
import { H1 } from '@/components/Title'
import React from 'react'

const About = () => {
  return (
    <div className='w-[600px] lg:w-[800px] mx-auto'>
      <div className='text-center'>
        <H1>About Me</H1>
      </div>
      <div className='flex flex-col lg:flex-row'>
        <div>
          <img
            src='https://scontent.fccu20-1.fna.fbcdn.net/v/t39.30808-6/318581062_10160012150610169_5609406085622197679_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=5icC1EnZEegAX-SBvqd&_nc_ht=scontent.fccu20-1.fna&oh=00_AfBHuStyZ-lDxNTdkhlYyJUTuOdyYcjdjqn5t6bgrGIAYQ&oe=64CACA47'
            alt='profile picture'
            className='w-[360px] h-[360px] object-cover rounded-full shadow-xl'
            style={{filter: 'sepia(.3) saturate(.8) contrast(1.2)'}}
          />
        </div>
        <div className='mt-8 lg:mt-0 lg:ml-16'>
          <p>Hello there! Thanks for stopping by.</p>
          {/* <p>
            <img
              alt='Obi-Wan saying hello there'
              src='https://media.tenor.com/dwuJ1LwfawUAAAAC/obi-wan-hello-there-obi-wan.gif'
            />
          </p> */}
          <p>
            I&apos;m Debadeep Sen, a software engineer by profession, and haver
            of many hobbies. I enjoy music (both listening to and singing),
            cooking, working out, playing video games, and have been an avid
            photographer in the past. I&apos;m also an ardent Marvel/MCU nerd
            (this website is a spoiler-free zone, though).
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
