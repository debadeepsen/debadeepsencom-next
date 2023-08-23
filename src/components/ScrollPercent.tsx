'use client'

import scrollUtils from '@/lib/utils/scrollUtils'
import { ColorModes } from '@/lib/constants/colorModeConstants'
import { THEME_COLOR } from '@/lib/constants/commonConstants'
import { RootState } from '@/store'
import { useAppSelector } from '@/store/hooks'
import React, { useEffect, useState } from 'react'

const ScrollPercent = () => {
  const colorModeValue = useAppSelector(
    (state: RootState) => state.colorMode.value
  )

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollPercent = scrollUtils.getScrollPercent(window.scrollY)
      const scrollPercentRounded = Math.round(scrollPercent)
      setScrollPercentRounded(scrollPercentRounded)
      const angle = (scrollPercentRounded * 360) / 100
      setScrollPercentAngle(angle)
    })
  }, [])

  const [scrollPercentRounded, setScrollPercentRounded] = useState(0)
  const [scrollPercentAngle, setScrollPercentAngle] = useState(0)
  const getStyle = () =>
    `conic-gradient(${THEME_COLOR} ${scrollPercentAngle}deg, #ddd ${scrollPercentAngle}deg)`

  return (
    <div className='fixed left-[48%] md:left-[2%] min-[2400px]:left-[22%] min-[3000px]:left-[30%] top-[20px] md:top-[160px] w-[40px] h-[40px] md:w-[64px] md:h-[64px] flex justify-center items-center pointer-event-none'>
      <div
        className='rounded-full w-full h-full flex justify-center items-center'
        style={{
          background: getStyle()
        }}
      >
        <div
          className='w-[90%] h-[90%] rounded-full flex justify-center items-center text-xs md:text-sm box-border'
          style={{
            background: ColorModes[colorModeValue].cardBg
          }}
        >
          {scrollPercentRounded}%
        </div>
      </div>
    </div>
  )
}

export default ScrollPercent
