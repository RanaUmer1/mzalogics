import '../styles/globals.css'
import Layout from '../components/Layout'
import { DefaultSeo } from 'next-seo'
import seo from '../lib/seo'
import Script from 'next/script'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);} 
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `}
          </Script>
        </>
      )}
      <DefaultSeo {...seo} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}