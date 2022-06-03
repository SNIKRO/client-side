import { Container as div } from "react-bootstrap"
import Image from "next/image"
import style from "../styles/footer.module.css"
import vk from "../images/social/vkontakte.png"
import tg from "../images/social/telegram.png"
import yt from "../images/social/youtube.png"

export default function Footer() {
  return (
      <div className= {`row text-center ${style.allContainer}`}>
        <div className="col-md-4">
              <Image
                className= {`col-md-4 ${style.img}`}
                src={ vk }
                alt="Вконтакте" 
                width={50}
                height={50}
              />
        </div>
        <div className="col-md-4">
              <Image
                className= {`col-md-4 ${style.img}`}
                src={ tg }
                alt="Телеграмм" 
                width={50}
                height={50}
              />
        </div>
        <div className="col-md-4">
              <Image
                className= {`col-md-4 ${style.img}`}
                src={ yt }
                alt="YouTube" 
                width={50}
                height={50}
              />
        </div>
      </div>
  )
}
