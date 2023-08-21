import Script from 'next/script'
import React from 'react'

const ThirdPartyScripts = () => {
  return (
    <>
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
      <Script id='ms-clarity'>
        {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "iiqo5mqz5c");`}
      </Script>
    </>
  )
}

export default ThirdPartyScripts
