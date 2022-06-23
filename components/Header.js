import styles from '../styles/header.module.css'
import Image from 'next/image'
import logo from '../images/logoOmGTU.png'
import { Container, Nav, Navbar } from 'react-bootstrap' //Container если сделать внутри навбара то будет по центру


export default function MainLayout({ children }) {
  return (
    <>
    <Navbar collapseOnSelect expand="md" bg='dark' variant='dark' >
        <Navbar.Brand href='https://www.omgtu.ru/general_information/faculties/faculty_of_information_technology_and_computer_systems/department_of_computer_science_and_engineering/' >
          <Image
            className={`d-line-block ${styles.image}`}
            src={ logo }
            alt="Логотип ОмГТУ"
            height={55}
            width={ 150 }
          />
          <p className={styles.center}>Кафедра ИВТ</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='/'><h3>Главная страница</h3></Nav.Link>
            <Nav.Link href='/about'><h3>Кафедра</h3></Nav.Link>
            <Nav.Link href='/partners'><h3>Наши Партнеры</h3></Nav.Link>
            <Nav.Link href='/contacts'><h3>Контакты</h3></Nav.Link>
          </Nav>  
        </Navbar.Collapse>
    </Navbar>
      <main className={ styles.main }>
        {children}
      </main>
    </>
  )
}