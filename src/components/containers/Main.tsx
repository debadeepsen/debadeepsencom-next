/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useAppDispatch, useAppSelector } from '@/store/hooks'
import Bg from './Bg'
import { RootState } from '@/store'
import {
  ColorModeValueType,
  ColorModes,
  DARK,
  LIGHT
} from '@/lib/constants/colorModeConstants'
import { updateColorMode } from '@/store/slices/colorModeSlice'
import { colorModeUtil } from '@/lib/commonLib'
import { useEffect } from 'react'

const Main = ({ children }: { children: React.ReactNode }) => {
  const colorModeValue = useAppSelector(
    (state: RootState) => state.colorMode.value
  )

  return (
    <main
      className='p-4 sm:p-8 w-auto md:w-3/4 md:mx-auto md:w-[90%] min-[2400px]:w-[2000px]'
      style={{ color: ColorModes[colorModeValue].color }}
    >
      <Bg />
      {children}
    </main>
  )
}

export default Main
