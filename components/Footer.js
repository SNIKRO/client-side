import { Container as div } from "react-bootstrap"
import Image from "next/image"
import styles from "../styles/footer.module.css"
import vk from "../images/social/vkontakte.png"
import tg from "../images/social/telegram.png"
import yt from "../images/social/youtube.png"

export default function Footer() {
  return (
    <>
      <div className="row text-center">
          <div className={`col-md-4 ${styles.hover} ${styles.imageDiv}`}>
            <Image
              className="col-md-4"
              src={ vk }
              alt="Вконтакте" 
              width={75}
              height={75}
            />
          </div>
        <div className={`col-md-4 ${styles.hover} ${styles.imageDiv}`}>
            <Image
              className="col-md-3"
              src={ tg }
              alt="Телеграм" 
              width={75}
              height={75}
            />
        </div>
        <div className={`col-md-4 ${styles.hover} ${styles.imageDiv}`}>
            <Image
                className="col-md-4"
                src={ yt }
                alt="YouTube" 
                width={75}
                height={75}
              />
        </div>
      </div>
    </>
  )
}
