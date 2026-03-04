import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'
import Head from 'next/head'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800'],
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>3M Tiles - Premium Quality Tiles</title>
        <meta name="description" content="Premium quality tiles for your dream home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={poppins.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}