'use client'

import './styles/globals.css'
import Script from 'next/script'
import { ReactNode, useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { store } from '@/store'
import { updateColorMode } from '@/store/slices/colorModeSlice'
import {
  ColorModeValueType,
  DARK,
  LIGHT
} from '@/lib/constants/colorModeConstants'
import { colorModeUtil } from '@/lib/commonLib'

const metadata = {
  title: 'Debadeep Sen',
  description: 'Personal website of Debadeep Sen'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    document.title = metadata.title

    if (!colorModeUtil.manualPreferenceSet) {
      const mql = globalThis.window?.matchMedia('(prefers-color-scheme: dark)')
      store.dispatch(
        updateColorMode({
          value: (mql?.matches ? DARK : LIGHT) as ColorModeValueType
        })
      )
    } else {
      store.dispatch(
        updateColorMode({
          value: colorModeUtil.value
        })
      )
    }

    setReady(true)
    console.log('here')
  }, [])

  const Html = (
    <html lang='en'>
      <Script
        src='https://kit.fontawesome.com/43640773c8.js'
        crossOrigin='anonymous'
        defer
      />
      <Script src='https://code.iconify.design/1/1.0.7/iconify.min.js' />
      <head>
        <meta name='title' content={metadata.title}></meta>
        <meta name='description' content={metadata.description}></meta>
      </head>
      <body>{children}</body>
    </html>
  )

  return <Provider store={store}>{Html}</Provider>
}
