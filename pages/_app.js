import Head from 'next/head'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import MainLayout from '../components/MainLayout'
import Footer from '../components/Footer'

export default function MyApp({ Component, pageProps}) {
  return(
    <>
      <Head>
        <meta name='keywords' content='OmGTU, ОмГТУ, Политех, Омский государственный технический университет, ИВТ, Информатика и вычислительная техника' />
        <meta name='description' content='Сайт кафедры информатика и вычислительная техника' />
        <meta charSet='utf-8' />
      </Head>
      <MainLayout />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
