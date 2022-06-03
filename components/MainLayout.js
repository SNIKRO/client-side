import Link from 'next/link'
import styles from '../styles/mainLayout.module.css'
import Image from 'next/image'
import logo from '../images/logoOmGTU.png'
import { Nav, Navbar } from 'react-bootstrap'


export default function MainLayout({ children }) {
  return (
    <>
    <Navbar collapseOnSelect expanded="lg" bg="dark" variant='dark'>
      <Navbar.Brand>
        <Image
          className={`d-line-block align-top ${styles.image}`}
          src={ logo }
          alt="Логотип ОмГТУ"
          height={55}
          width={ 150 }
        />{' '}
        Информатика и вычислительная техника
      </Navbar.Brand>

      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='/'>ГЛАВНАЯ СТРАНИЦА</Nav.Link>
          <Nav.Link href='/about'>О НАС</Nav.Link>
        </Nav>  
      </Navbar.Collapse>
    </Navbar>
      {/* <nav className={ styles.nav }>
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
      </nav> */}
      <main className={ styles.main }>
        {children}
      </main>
    </>
  )
}