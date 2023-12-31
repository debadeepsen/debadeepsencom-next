/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import './styles/globals.css'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '@/store'
import Main from '@/components/containers/Main'
import ThirdPartyScripts from '@/components/ThirdPartyScripts'
import { photosDir, photosToShow } from '@/lib/constants/photosContants'

const metadata = {
  title: 'Debadeep Sen',
  description: 'Personal website of Debadeep Sen'
}

const Html = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='en'>
      <ThirdPartyScripts />
      <head>
        <meta name="google-site-verification" content="Nfs7yrT9a_cUhmdDxr8u6WQ2NYTAE3yb-a5B1II4u5M" />
        {photosToShow.map(file => (
          <link
            key={file.filename}
            rel='preload'
            href={photosDir + file.filename}
            type='image/webp'
          />
        ))}
      </head>
      <body>
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-MHPK7PX4'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
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
