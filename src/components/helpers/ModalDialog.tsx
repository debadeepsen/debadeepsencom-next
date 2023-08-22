import React, { ReactNode, useState } from 'react'
import CloseButton from './CloseButton'
import { useAppSelector } from '@/store/hooks'
import { RootState } from '@/store'
import { ColorModes } from '@/lib/constants/colorModeConstants'

const ModalDialog = ({
  open,
  onClose,
  children
}: {
  open: boolean
  onClose: () => void
  children: ReactNode
}) => {
  const colorModeValue = useAppSelector(
    (state: RootState) => state.colorMode.value
  )

  if (!open) return <></>

  return (
    <div className='fixed left-0 top-0 w-screen h-screen bg-[#3337] dark:bg-[#aaa5] flex justify-center items-center z-[200] transition-all'>
      <div
        className='w-full md:w-3/4 lg:w-auto lg:min-w-[400px] shadow-lg rounded-md'
        style={{
          background: ColorModes[colorModeValue].cardBg
        }}
      >
        <div className='w-full flex justify-end'>
          <CloseButton onClose={onClose} />
        </div>
        <div className='-mt-5 p-4 mb-2 flex flex-wrap justify-center items-center'>{children}</div>
      </div>
    </div>
  )
}

export default ModalDialog
