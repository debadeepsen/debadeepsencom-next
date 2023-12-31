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
import { Suspense } from 'react'
import { setMenuOpen } from '@/store/slices/menuSlice'
import BackToTop from '../BackToTop'
import LoadingSVG from '../SVGs/LoadingSVG'
import ModalDialog from '../helpers/ModalDialog'
import { setModalOpen } from '@/store/slices/modalSlice'

const Main = ({ children }: { children: React.ReactNode }) => {
  const colorModeValue = useAppSelector(
    (state: RootState) => state.colorMode.value
  )

  const colorModeLoaded = useAppSelector(
    (state: RootState) => state.colorMode.loaded
  )

  const { open: modalOpen, text: modalText } = useAppSelector(
    (state: RootState) => state.modal
  )

  const dispatch = useAppDispatch()
  dispatch(setMenuOpen(false))

  return (
    <Suspense
      fallback={
        <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
          <LoadingSVG />
        </div>
      }
    >
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
        <BackToTop />
        <ModalDialog
          open={modalOpen}
          onClose={() => {
            dispatch(setModalOpen(false))
          }}
        >
          {modalText}
        </ModalDialog>
      </main>
    </Suspense>
  )
}

export default Main
