import { THEME_COLOR } from '@/lib/constants/commonConstants'
import React from 'react'

const Divider = () => {
  return (
    <div className='flex flex-col justify-center items-center my-8 sm:my-16'>
      <div className='w-[50px] sm:w-[100px] lg:w-[120px] h-[2px] opacity-20' style={{background: THEME_COLOR}}></div>
      <div className='ml-10 mt-1 w-[50px] sm:w-[100px] lg:w-[120px] h-[2px] opacity-30' style={{background: THEME_COLOR}}></div>
    </div>
  )
}

export default Divider
