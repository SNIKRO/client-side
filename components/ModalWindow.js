import { Modal } from "react-bootstrap"
import styles from "../styles/modal.module.css"


export default function ModalWindow( props ) {
  return (
    <Modal show={ props.show } onHide={ props.close } centered="true">
      <Modal.Header >
        <Modal.Title>
            <h3 className={`text-center ${styles.h3}`}>
              { `${props.data.id}`}
            </h3>
            <h3 className={`text-center ${styles.h3}`}>
              {`${props.data.title} год`}
            </h3>
            </Modal.Title>
      </Modal.Header>
    <Modal.Body>
    <p className="text-center">{props.data.total}</p>
      <ol className={`${styles.ol}`}>
        {
          props.data.test.map(item => (
            <li key={item.id} className={`${styles.li}`}>
            {item.profile}
                <p className="text-center">{item.places}</p>
            </li>
          )
          )
        }
      </ol>
      <p className="text-center">{props.data.paymentTitle}</p>
      <ul className={`text-center ${styles.ul}`}>
        {
          props.data.payment.map(item => (
            <li key={item.id} className={`${styles.li}`}>{item.places}</li>
          ))
        }
      </ul>
    </Modal.Body>
  </Modal>
  )
}


