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
        <meta name='title' content={metadata.title}></meta>
        <meta name='description' content={metadata.description}></meta>
        <meta
          property='og:image'
          content='https://debadeepsen.com/img/dsen1.jpg'
        />
        <meta property='og:image:width' content='200' />
        <meta property='og:image:height' content='200' />
        {photosToShow.map(file => (
          <link
            key={file.filename}
            rel='preload'
            href={photosDir + file.filename}
            type='image/webp'
          />
        ))}
        <meta name="google-site-verification" content="Nfs7yrT9a_cUhmdDxr8u6WQ2NYTAE3yb-a5B1II4u5M" />
        <title>{metadata.title}</title>
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
