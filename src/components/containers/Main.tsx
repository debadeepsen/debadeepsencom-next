'use client'

import { useAppSelector } from '@/store/hooks'
import Bg from './Bg'
import { RootState } from '@/store'
import { ColorModes } from '@/lib/constants/colorModeConstants'

const Main = ({ children }: { children: React.ReactNode }) => {
  const colorModeValue = useAppSelector(
    (state: RootState) => state.colorMode.value
  )
  return (
    <main
      className='p-4 sm:p-8 w-auto md:w-3/4 md:mx-auto xl:w-[3/4] min-[2800px]:w-[2000px]'
      style={{ color: ColorModes[colorModeValue].color }}
    >
      <Bg />
      {children}
    </main>
  )
}

export default Main
