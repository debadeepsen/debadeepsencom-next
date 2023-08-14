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
      <Script
        async
        src='https://www.googletagmanager.com/gtag/js?id=G-H7GJ1WQ6ZP'
      ></Script>
      <Script id='google-analytics'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-H7GJ1WQ6ZP');
        `}
      </Script>
      <Script id='gtm'>
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MHPK7PX4');`}
      </Script>
      <head>
        <meta name='title' content={metadata.title}></meta>
        <meta name='description' content={metadata.description}></meta>
        <meta
          property='og:image'
          content='https://debadeepsen.com/img/dsen1.jpg'
        />
        <meta property='og:image:width' content='200' />
        <meta property='og:image:height' content='200' />
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
