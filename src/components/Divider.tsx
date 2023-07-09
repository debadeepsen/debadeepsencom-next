import { THEME_COLOR } from '@/lib/constants/commonConstants'
import React from 'react'

const Divider = () => {
  return (
    <div className='flex justify-center items-center'>
      <svg width='300px' height='100px' viewBox='0 0 300 200'>
        <line
          x1='40'
          x2='260'
          y1='80'
          y2='80'
          stroke={THEME_COLOR}
          stroke-width='20'
          stroke-linecap='round'
          stroke-dasharray='1, 30'
        />
      </svg>
    </div>
  )
}

export default Divider
