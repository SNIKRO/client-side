import { Carousel } from "react-bootstrap"
import Image from "next/image"
import mypic from "../images/2.jpg"
import styles from "../styles/carousel.module.css"

export default function MyCarousel() {
  return(
  <Carousel variant="dark" interval="3000" className={ `300-px-wide ${styles.carousel}`}>
    <Carousel.Item className={styles.item}>
      <Image 
        className={`d-block w-100 ${styles.img}`}
        src= { mypic }
        alt="First slide"
      />
      <Carousel.Caption>
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className={styles.item}>
      <Image
        className={`d-block w-100 ${styles.img}`}
        src= { mypic }
        alt="Second slide"
        sizes="300px"
      />
      <Carousel.Caption >
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className={styles.item}>
      <Image
        className={`d-block w-100  ${styles.img}`}
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
