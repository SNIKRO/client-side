import { Carousel } from "react-bootstrap"
import Image from "next/image"
import mypic1 from "../images/partners.png"
import mypic2 from "../images/2.jpg"
import mypic3 from "../images/3.jpg"
import styles from "../styles/carousel.module.css"

export default function MyCarousel() {
  return(
  <Carousel variant="dark" interval="2000" className={`${styles.carousel}`}>
    <Carousel.Item className={styles.item}>
      <Image 
        className={`d-block w-100  ${styles.img}`}
        src= { mypic1 }
        alt="First slide"
        priority={true}
      />
      <Carousel.Caption> 
        <h3 className={styles.text}>Места работы наших студентов</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className={styles.item}>
      <Image
        className={`d-block w-100 ${styles.img}`}
        src= { mypic2 }
        alt="Second slide"
      />
      <Carousel.Caption >
        <h5 className={styles.text}>Second slide label</h5>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className={styles.item}>
      <Image
        className={`d-block w-100 ${styles.img}`}
        src= { mypic3 }
        alt="Third slide"
      />
      <Carousel.Caption >
        <h5 className={styles.text}>Third slide label</h5>
        <p className={styles.text}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}
