import { THEME_COLOR } from '@/lib/constants/commonConstants'
import React from 'react'

const Title = () => {
  return (
    <h1
      className='font-extralight text-5xl sm:text-6xl lg:text-8xl'
      style={{ color: THEME_COLOR }}
    >
      Debadeep Sen
    </h1>
  )
}

export default Title
