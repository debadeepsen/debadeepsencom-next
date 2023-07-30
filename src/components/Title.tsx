import { THEME_COLOR } from '@/lib/constants/commonConstants'
import React, { ReactNode } from 'react'

export const H1 = ({ children }: { children: ReactNode }) => (
  <h1
    className='font-extralight text-5xl sm:text-6xl lg:text-8xl'
    style={{ color: THEME_COLOR }}
  >
    {children}
  </h1>
)

const Title = () => {
  return <H1>Debadeep Sen</H1>
}

export default Title
