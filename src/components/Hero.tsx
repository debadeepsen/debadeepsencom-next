import React from 'react'
import SoftwareEngineerSVG from './SVGs/SoftwareEngineerSVG'
import ProgrammerSVG from './SVGs/ProgrammerSVG'
import SubTitle from './SubTitle'
import Title from './Title'
import CatSVG from './SVGs/CatSVG'

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row mt-14 mb-10'>
      <div className='w-full md:w-[800px] flex align-center justify-center'>
        <ProgrammerSVG />
      </div>
      <div className='p-0 md:pl-12 text-center md:text-left'>
        <Title />
        <SubTitle />
      </div>
    </div>
  )
}

export default Hero
