'use client'

import './styles/globals.css'
import Script from 'next/script'
import { ReactNode, useEffect } from 'react'
import { Provider } from 'react-redux'
import { RootState, store } from '@/store'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { ColorModes } from '@/lib/constants/colorModeConstants'

export const metadata = {
  title: 'Debadeep Sen',
  description: 'Personal website of Debadeep Sen'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.title = metadata.title
  }, [])

  const colorModeValue = store.getState().colorMode.value

  return (
    <Provider store={store}>
      <html lang='en'>
        <Script
          src='https://kit.fontawesome.com/43640773c8.js'
          crossOrigin='anonymous'
          defer
        />
        <Script src='https://code.iconify.design/1/1.0.7/iconify.min.js' />
        <body
          style={{
            background: ColorModes[colorModeValue].bodyBg,
            color: ColorModes[colorModeValue].color
          }}
        >
          {children}
        </body>
      </html>
    </Provider>
  )
}
