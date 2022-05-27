import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/mainLayout.module.css'
import Image from 'next/image'
import logo from '../images/logoOmGTU.png'


export default function MainLayout({ children }) {
  return (
    <>
    <Head>
      <title>IVT SITE</title>
      <meta name='keywords' content='next, javascript, nextjs, react' />
      <meta name='description' content='tets work on next' />
      <meta charSet='utf-8' />
    </Head>
      <nav className={ styles.nav }>
        <Image
        className={ styles.image }
        src={ logo }
        alt="Логотип ОмГТУ"
        height={55}
        width={ 150 }
        />
        <h1 className={ styles.h1 }>Информатика и вычислительная техника </h1>
          <Link href={"/"}><a>ГЛАВНАЯ СТРАНИЦА</a></Link>
          <Link href={"/about"}><a>О НАС</a></Link>
      </nav>
      <main className={ styles.main }>
        {children}
      </main>
    </>
  )
}