import styles from '../styles/header.module.css'
import Image from 'next/image'
import logo from '../images/logoOmGTU.png'
import { Container, Nav, Navbar } from 'react-bootstrap'


export default function MainLayout({ children }) {
  return (
    <>
    <Navbar collapseOnSelect expand="md" bg="dark" variant='dark' fixed='top' >
      <Container className={ styles.center}>
        <Navbar.Brand href='https://omgtu.ru/' >
          <Image
            className={`d-line-block ${styles.image}`}
            src={ logo }
            alt="Логотип ОмГТУ"
            height={55}
            width={ 150 }
          />
          <p>Кафедра ИВТ</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='/'><h3>Главная страница</h3></Nav.Link>
            <Nav.Link href='/about'><h3>Кафедра</h3></Nav.Link>
            <Nav.Link href='/partners'><h3>Наши Партнеры</h3></Nav.Link>
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