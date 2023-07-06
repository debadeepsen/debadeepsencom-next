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
      <Head>
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css'
        />
        <link
          rel='stylesheet'
          href='https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css'
        />
      </Head>
      <Script
        src='https://kit.fontawesome.com/43640773c8.js'
        crossOrigin='anonymous'
        defer
      />
      <Script src='https://code.iconify.design/1/1.0.7/iconify.min.js' />
      <body>{children}</body>
    </html>
  )
}
