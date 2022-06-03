import { Html, Head, Main, NextScript } from 'next/document'
import Footer from '../components/Footer'
import MainLayout from '../components/MainLayout'

export default function Document() {
  return (
    <Html>
      <Head>
      <link href='https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap' rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}