import { THEME_COLOR } from '@/lib/constants/commonConstants'
import React from 'react'

const LoadingOverlay = () => {
  return (
    <div className='fixed z-20 left-0 top-0 w-[100vw] h-[100vh] border-box bg-white flex justify-center items-center'>
      {/* Thanks to https://codepen.io/nikhil8krishnan/pen/rVoXJa for this SVG! */}
      <svg
        version='1.1'
        id='L4'
        xmlns='http://www.w3.org/2000/svg'
        width={100}
        height={100}
        viewBox='0 0 100 100'
        enable-background='new 0 0 0 0'
      >
        <circle fill={THEME_COLOR} stroke='none' cx='6' cy='50' r='6'>
          <animate
            attributeName='opacity'
            dur='1s'
            values='0;1;0'
            repeatCount='indefinite'
            begin='0.1'
          ></animate>
        </circle>
        <circle fill={THEME_COLOR} stroke='none' cx='26' cy='50' r='6'>
          <animate
            attributeName='opacity'
            dur='1s'
            values='0;1;0'
            repeatCount='indefinite'
            begin='0.2'
          ></animate>
        </circle>
        <circle fill={THEME_COLOR} stroke='none' cx='46' cy='50' r='6'>
          <animate
            attributeName='opacity'
            dur='1s'
            values='0;1;0'
            repeatCount='indefinite'
            begin='0.3'
          ></animate>
        </circle>
      </svg>
    </div>
  )
}

export default LoadingOverlay
