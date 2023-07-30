/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useAppSelector } from '@/store/hooks'
import Bg from '../Bg'
import { RootState } from '@/store'
import { ColorModes } from '@/lib/constants/colorModeConstants'
import LoadingOverlay from '../LoadingOverlay'

const Main = ({ children }: { children: React.ReactNode }) => {
  const colorModeValue = useAppSelector(
    (state: RootState) => state.colorMode.value
  )

  const colorModeLoaded = useAppSelector(
    (state: RootState) => state.colorMode.loaded
  )

  return (
    <main
      className='p-4 sm:p-8 w-auto md:w-3/4 md:mx-auto md:w-[90%] min-[2400px]:w-[2000px]'
      style={{ color: ColorModes[colorModeValue].color }}
    >
      {!!!colorModeLoaded && <LoadingOverlay />}
      <Bg />
      {children}
    </main>
  )
}

export default Main
