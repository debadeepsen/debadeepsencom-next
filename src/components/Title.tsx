import { THEME_COLOR } from '@/lib/constants/commonConstants'
import React, { ReactNode } from 'react'

export const H1 = ({
  leftAligned,
  children
}: {
  leftAligned?: boolean
  children: ReactNode
}) => (
  <h1
    className={
      'font-extralight text-5xl sm:text-6xl lg:text-7xl ' +
      (leftAligned ? 'text-left' : 'text-center')
    }
    style={{ color: THEME_COLOR }}
  >
    {children}
  </h1>
)

const Title = () => {
  return <H1 leftAligned>Debadeep Sen</H1>
}

export default Title
