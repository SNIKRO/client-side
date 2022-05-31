import MainLayout from "../components/MainLayout"
import MyCarousel from "../components/Carousel"
import Image from "next/image"
import mag  from "../images/mag.png"
import asspirant  from "../images/asspirant.png"
import baklawr  from "../images/baklawr.png"


export default function Index() {
  return (
  <MainLayout>
    <MyCarousel />
      <div className="row text-center">
          <div className="col-md-4">
            <Image
              className="col-md-4"
              src={ baklawr }
              alt="Бакалавриат" 
              width={100}
              height={100}
            />
            <p>Бакалавриат</p>
          </div>
        <div className="col-md-4">
            <Image
              className="col-md-4"
              src={ mag }
              alt="Магистратура" 
              width={100}
              height={100}
            />
            <p>Магистратура</p>
        </div>
        <div className="col-md-4">
            <Image
                className="col-md-4"
                src={ asspirant }
                alt="Аспирантура" 
                width={100}
                height={100}
              />
              <p>Аспирантура</p>
        </div>
      </div>
  </MainLayout>
  )
}
