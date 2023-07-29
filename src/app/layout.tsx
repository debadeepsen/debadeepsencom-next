'use client'

import './styles/globals.css'
import Script from 'next/script'
import { ReactNode, useEffect } from 'react'
import { Provider } from 'react-redux'
import { store } from '@/store'

export const metadata = {
  title: 'Debadeep Sen',
  description: 'Personal website of Debadeep Sen'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.title = metadata.title
  }, [])

  return (
    <Provider store={store}>
      <html lang='en'>
        <Script
          src='https://kit.fontawesome.com/43640773c8.js'
          crossOrigin='anonymous'
          defer
        />
        <Script src='https://code.iconify.design/1/1.0.7/iconify.min.js' />
        <body>{children}</body>
      </html>
    </Provider>
  )
}
