import Image from "next/image"
import styles from "../styles/footer.module.css"
import vk from "../images/social/vkontakte.png"
import tg from "../images/social/telegram.png"
import yt from "../images/social/youtube.png"
import Link from "next/link"

export default function Footer() {
  return (
    <>
    <div className="container">
      <div className="row text-center">
          <div className={`col-md-2 align-center ${styles.hover} ${styles.imageDiv}`}>
            <Link href="https://vk.com/">
              <a>
                <Image
                  className="col-md-2"
                  src={ vk }
                  alt="Вконтакте" 
                  width={75}
                  height={75}
                />
              </a>
            </Link>
          </div>
        <div className={`col-md-2 align-center ${styles.hover} ${styles.imageDiv}`}>
          <Link href="https://web.telegram.org/z/">
            <a>
              <Image
                className="col-md-2"
                src={ tg }
                alt="Телеграм" 
                width={75}
                height={75}
              />
            </a>
          </Link>
        </div>
        <div className={`col-md-2 align-center ${styles.hover} ${styles.imageDiv}`}>
          <Link href="https://www.youtube.com">
            <a>
              <Image
                  className="col-md-2"
                  src={ yt }
                  alt="YouTube" 
                  width={75}
                  height={75}
                />
            </a>
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}
