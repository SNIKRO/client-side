import { Carousel } from "react-bootstrap"
import Image from "next/image"
import mypic from "../public/2.jpg"

export default function MyCarousel() {
  return(
  <Carousel variant="dark" interval="3000">
    <Carousel.Item >
      <Image
        className="d-block w-100 "
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
        className="d-block w-100"
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
        className="d-block w-100"
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
