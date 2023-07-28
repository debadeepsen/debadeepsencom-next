import { THEME_COLOR } from '@/lib/constants/commonConstants'
import React from 'react'

const Divider = () => {
  return (
    <div className='flex flex-col justify-center items-center my-8 sm:my-16'>
      <div className='w-[50px] sm:w-[150px] lg:w-[200px] h-[4px]' style={{background: THEME_COLOR}}></div>
    </div>
  )
}

export default Divider
