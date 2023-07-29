'use client'
import { ColorModes } from '@/lib/constants/colorModeConstants'
import { RootState } from '@/store'
import { useAppSelector } from '@/store/hooks'
import { ReactNode } from 'react'

const Card = ({ children }: { children: ReactNode }) => {
  const colorModeValue = useAppSelector(
    (state: RootState) => state.colorMode.value
  )

  return (
    <div
      className='block p-4 my-4 sm:mx-8 sm:ml-0 shadow-md min-w-[120px] w-fit'
      style={{ background: ColorModes[colorModeValue].cardBg }}
    >
      {children}
    </div>
  )
}

export default Card
