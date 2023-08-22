import { ColorModes } from '@/lib/constants/colorModeConstants'
import { RootState } from '@/store'
import { useAppSelector } from '@/store/hooks'
import React from 'react'

const CloseButton = ({ onClose }: { onClose?: () => void }) => {
  const colorModeValue = useAppSelector(
    (state: RootState) => state.colorMode.value
  )
  return (
    <button className='bg-transparent border-0 rounded-full flex justify-center items-center w-[36px] h-[36px] text-lg' style={{
        color: ColorModes[colorModeValue].menu
    }}>
      &times;
    </button>
  )
}

export default CloseButton
