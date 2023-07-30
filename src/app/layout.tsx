'use client'

import './styles/globals.css'
import Script from 'next/script'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '@/store'

const metadata = {
  title: 'Debadeep Sen',
  description: 'Personal website of Debadeep Sen'
}

const Html = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='en'>
      <Script
        src='https://kit.fontawesome.com/43640773c8.js'
        crossOrigin='anonymous'
        defer
      />
      <Script defer src='https://code.iconify.design/1/1.0.7/iconify.min.js' />
      <head>
        <meta name='title' content={metadata.title}></meta>
        <meta name='description' content={metadata.description}></meta>
        <title>{metadata.title}</title>
      </head>
      <body>{children}</body>
    </html>
  )
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <Html>{children}</Html>
    </Provider>
  )
}
