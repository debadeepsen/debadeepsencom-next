'use client'
import { ColorModes } from '@/lib/constants/colorModeConstants'
import { RootState } from '@/store'
import { useAppSelector } from '@/store/hooks'
import { ReactNode } from 'react'

const Card = ({
  fullWidth,
  classList,
  children
}: {
  fullWidth?: boolean
  classList?: string
  children: ReactNode
}) => {
  const colorModeValue = useAppSelector(
    (state: RootState) => state.colorMode.value
  )

  const additionalClasses = classList ?? ''

  return (
    <div
      className={
        'card block p-4 my-4 mt-0 sm:mx-8 sm:ml-0 shadow-md min-w-[120px] ' +
        (fullWidth ? 'w-full' : 'w-auto') + ' ' + additionalClasses
      }
      style={{ background: ColorModes[colorModeValue].cardBg }}
    >
      {children}
    </div>
  )
}

export default Card
