/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useAppDispatch, useAppSelector } from '@/store/hooks'
import Bg from '../Bg'
import { RootState } from '@/store'
import { ColorModes } from '@/lib/constants/colorModeConstants'
import LoadingOverlay from '../LoadingOverlay'
import Menu from '../menu/Menu'
import PageBottom from '../PageBottom'
import ColorModeChanger from '../helpers/ColorModeChanger'
import { useEffect } from 'react'
import { setOpen } from '@/store/slices/menuSlice'

const Main = ({ children }: { children: React.ReactNode }) => {
  const colorModeValue = useAppSelector(
    (state: RootState) => state.colorMode.value
  )

  const colorModeLoaded = useAppSelector(
    (state: RootState) => state.colorMode.loaded
  )
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setOpen(false))
  })

  return (
    <main
      className='p-4 sm:p-8 w-auto md:w-3/4 md:mx-auto md:w-[90%] min-[2400px]:w-[2000px]'
      style={{ color: ColorModes[colorModeValue].color }}
    >
      {!!!colorModeLoaded && <LoadingOverlay />}
      <Menu />
      <Bg />
      {children}
      <PageBottom />
      <ColorModeChanger />
    </main>
  )
}

export default Main
