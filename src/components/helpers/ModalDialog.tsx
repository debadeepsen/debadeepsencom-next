import React, { ReactNode, useState } from 'react'
import CloseButton from './CloseButton'

const ModalDialog = ({
  open,
  onClose,
  children
}: {
  open: boolean
  onClose: () => void
  children: ReactNode
}) => {
  if (!open) return <></>

  return (
    <div className='fixed left-0 top-0 w-screen h-screen bg-[#3337] dark:bg-[#aaa5] flex justify-center items-center z-[200]'>
      <div className='p-4 bg-white w-full md:w-3/4 lg:w-auto lg:min-w-[400px] shadow-lg rounded-md'>
        <CloseButton />
        <div className='modal-content'>{children}</div>
      </div>
    </div>
  )
}

export default ModalDialog
