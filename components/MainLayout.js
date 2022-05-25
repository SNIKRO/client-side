import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/mainLayout.module.css'


export default function MainLayout({ children }) {
  return (
    <>
    <Head>
      <title>NEXT TEST</title>
      <meta name='keywords' content='next, javascript, nextjs, react' />
      <meta name='description' content='tets work on next' />
      <meta charSet='utf-8' />
    </Head>
      <nav className={ styles.nav }>
        <h1 className={ styles.h1 }>NAVIGATION</h1>
          <Link href={"/"}><a>ГЛАВНАЯ СТРАНИЦА</a></Link>
          <Link href={"/about"}><a>О НАС</a></Link>
      </nav>
      <main className={ styles.main }>
        {children}
      </main>
    </>
  )
}