import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card, Carousel, Container, Nav, Navbar } from "react-bootstrap"
import MainLayout from "../components/MainLayout"

export default function About() {
  return(
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    // <MainLayout>
    //   <h1>ABOUT</h1>
    // </MainLayout>
  )
}