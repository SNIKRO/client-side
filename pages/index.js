import MyCarousel from "../components/Carousel"
import Image from "next/image"
import student  from "../images/student.png"
import { useState } from "react"
import ModalWindow from "../components/ModalWindow"
import styles from "../styles/main.module.css"
import { infoLoader } from "../src/loader"



export default  function Index(data) {

  const [showModal, setShowModal] = useState(false)
  const [info, setInfo] = useState(data.backlawr)


 async function onImageClick(event) {
      if(event.target.alt === "Бакалавриат" ){
        setInfo(data.backlawr)
      }
     if(event.target.alt === "Магистратура" ){
        setInfo(data.mag)
     }
     setShowModal(true)
  }
  function closeModal() {
    setShowModal(false)
  }

  return (
    <>
      <MyCarousel />
      <div className="text-center mt-5">
        <h3>
            Кафедра ведёт набор студентов по следующим направлениям подготовки:
        </h3>
    </div>
      <div className="container mt-5">
        <div className= "row text-center">
            <div className={`col-md-2 align-center ${styles.hover} ${styles.imageDiv}`} onClick={onImageClick}>
              <Image
                className="col-md-2"
                src={ student }
                alt="Бакалавриат" 
                width={75}
                height={75}
              />
              <p>Бакалавриат</p>
            </div>
          <div className={`col-md-2 align-center ${styles.hover} ${styles.imageDiv}`} onClick={onImageClick} >
              <Image
                className="col-md-2"
                src={ student }
                alt="Магистратура" 
                width={75}
                height={75}
              />
              <p>Магистратура</p>
          </div>
          <div className={`col-md-2 align-center ${styles.hover} ${styles.imageDiv}`} onClick={onImageClick}>
              <Image
                  className="col-md-2"
                  src={ student }
                  alt="Аспирантура" 
                  width={75}
                  height={75}
                />
                <p>Аспирантура</p>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <h3 className="text-center">Основные изучаемые дисциплины:</h3>
        <ul className={styles.ul}>
        {
          data.discp.map(item =>(
            <li key={item.id} className={styles.li}><h5>{item.name}</h5></li>
          ))
        }
        </ul>
      </div>
        <ModalWindow show={ showModal } close= { closeModal }  data={info} />
    </>
  )
}

Index.getInitialProps = async (ctx) => {
  const backlawr = await infoLoader("backlawr")
  const mag = await infoLoader("mag")
  const discp = await infoLoader("disciplines")
  return {
      backlawr,
      mag,
      discp
  }
}
