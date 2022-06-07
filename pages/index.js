import MainLayout from "../components/Header"
import MyCarousel from "../components/Carousel"
import Image from "next/image"
import student  from "../images/student.png"
import { useState } from "react"
import ModalWindow from "../components/ModalWindow"
import styles from "../styles/main.module.css"
import * as backlawr from "../BACK.json"


export default function Index() {

  const [showModal, setShowModal] = useState(false)

  function onImageClick() {
    setShowModal(true)
  }
  function closeModal() {
    setShowModal(false)
  }


  return (
    <>
      <MyCarousel />
        <div className= "row text-center">
            <div className={`col-md-4 ${styles.hover} ${styles.imageDiv}`} onClick={onImageClick}>
              <Image
                className="col-md-4"
                src={ student }
                alt="Бакалавриат" 
                width={75}
                height={75}
              />
              <p>Бакалавриат</p>
            </div>
          <div className={`col-md-4 ${styles.hover} ${styles.imageDiv}`}>
              <Image
                className="col-md-4"
                src={ student }
                alt="Магистратура" 
                width={75}
                height={75}
              />
              <p>Магистратура</p>
          </div>
          <div className={`col-md-4 ${styles.hover} ${styles.imageDiv}`}>
              <Image
                  className="col-md-4"
                  src={ student }
                  alt="Аспирантура" 
                  width={75}
                  height={75}
                />
                <p>Аспирантура</p>
          </div>
        </div>
        <ModalWindow show={ showModal } close= {closeModal} />
    </>
  )
}
