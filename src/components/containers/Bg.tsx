'use client'

import { ColorModes } from '@/lib/constants/colorModeConstants'
import { RootState } from '@/store'
import { useAppSelector } from '@/store/hooks'
import React, { ReactNode } from 'react'

const Bg = () => {
  const colorModeValue = useAppSelector(
    (state: RootState) => state.colorMode.value
  )
  return (
    <div
      className='fixed top-0 left-0 w-[100vw] h-[100vh] -z-10'
      style={{ background: ColorModes[colorModeValue].bodyBg }}
    ></div>
  )
}

export default Bg
