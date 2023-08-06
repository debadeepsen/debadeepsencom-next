/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import './styles/globals.css'
import Script from 'next/script'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '@/store'
import Main from '@/components/containers/Main'
import { useAppDispatch } from '@/store/hooks'
import { setOpen } from '@/store/slices/menuSlice'

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
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        async
        src='https://www.googletagmanager.com/gtag/js?id=G-NDJRRTCB95'
      ></Script>
      <Script id='google-analytics'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-NDJRRTCB95');
        `}
      </Script>
      <head>
        <meta name='title' content={metadata.title}></meta>
        <meta name='description' content={metadata.description}></meta>
        <meta property='og:image' content='<generated>' />
        <meta property='og:image:type' content='<generated>' />
        <meta property='og:image:width' content='<generated>' />
        <meta property='og:image:height' content='<generated>' />
        <meta name='twitter:image' content='<generated>' />
        <meta name='twitter:image:type' content='<generated>' />
        <meta name='twitter:image:width' content='<generated>' />
        <meta name='twitter:image:height' content='<generated>' />
        <title>{metadata.title}</title>
      </head>
      <body>
        <Main>{children}</Main>
      </body>
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
