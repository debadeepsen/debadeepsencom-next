import Head from 'next/head'
import './styles/globals.css'
import Script from 'next/script'

export const metadata = {
  title: 'Debadeep Sen',
  description: 'Personal website of Debadeep Sen'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <Script
        src='https://kit.fontawesome.com/43640773c8.js'
        crossOrigin='anonymous'
        defer
      />
      <Script src='https://code.iconify.design/1/1.0.7/iconify.min.js' />
      <body
        style={{
          background: '#efefef'
        }}
      >
        {children}
      </body>
    </html>
  )
}
