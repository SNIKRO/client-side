import Image from "next/image"
import { Button, Card, Carousel, Container, Nav, Navbar } from "react-bootstrap"
import MainLayout from "../components/MainLayout"

export default function About() {
  return(
    <MainLayout>
      <Button className="btn-info">test</Button>
      <h1 className="text-uppercase">ABOUT</h1>
    </MainLayout>
  )
}