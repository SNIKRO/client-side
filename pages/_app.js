import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import MainLayout from '../components/MainLayout'
import Footer from '../components/Footer'

export default function MyApp({ Component, pageProps}) {
  return(
    <>
      <MainLayout />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
