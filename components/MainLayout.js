import Link from 'next/link'
import styles from '../styles/mainLayout.module.css'
import Image from 'next/image'
import logo from '../images/logoOmGTU.png'
import { Container, Nav, Navbar } from 'react-bootstrap'


export default function MainLayout({ children }) {
  return (
    <>
    <Navbar collapseOnSelect expanded="lg" bg="dark" variant='dark'>
      <Container>
        <Navbar.Brand>
          <Image
            className={`d-line-block align-top ${styles.image}`}
            src={ logo }
            alt="Логотип ОмГТУ"
            height={55}
            width={ 150 }
          />
          Информатика и вычислительная техника
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='/'>ГЛАВНАЯ СТРАНИЦА</Nav.Link>
            <Nav.Link href='/about'>О НАС</Nav.Link>
          </Nav>  
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <main className={ styles.main }>
        {children}
      </main>
    </>
  )
}