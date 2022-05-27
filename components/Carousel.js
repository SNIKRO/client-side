import { Carousel } from "react-bootstrap"
import Image from "next/image"
import mypic from "../images/2.jpg"
import "../styles/carousel.module.css"

export default function MyCarousel() {
  return(
  <Carousel variant="dark" interval="3000" >
    <Carousel.Item >
      <Image
        className="d-block test img-fluid"
        src= { mypic }
        alt="First slide"
      />
      <Carousel.Caption>
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Image
        className="d-block img-fluid"
        src= { mypic }
        alt="Second slide"
      />
      <Carousel.Caption>
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Image
        className="d-block img-fluid"
        src= { mypic }
        alt="Third slide"
      />
      <Carousel.Caption>
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}
