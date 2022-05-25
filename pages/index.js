import { Container, Nav, Navbar } from "react-bootstrap"
import MainLayout from "../components/MainLayout"
import 'bootstrap/dist/css/bootstrap.css'

export default function Index() {
  return (
    <MainLayout>
      <Container className="content-justify-center">
        <h1 className="text-center">Главная страница</h1>

      </Container>
    </MainLayout>
  ) 
}
