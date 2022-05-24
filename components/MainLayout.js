import Link from 'next/link'
import styles from '../styles/mainLayout.module.css'


export default function MainLayout({ children }) {
  return (
    <div>
      <nav className={ styles.nav }>
        <h1 className={ styles.h1 }>NAVIGATION</h1>
          <Link href={"/"}><a>ГЛАВНАЯ СТРАНИЦА</a></Link>
          <Link href={"/about"}><a>О НАС</a></Link>
      </nav>
      <main className={ styles.main }>
        {children}
      </main>
    </div>
  )
}