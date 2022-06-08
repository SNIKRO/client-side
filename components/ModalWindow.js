import { Modal } from "react-bootstrap"
import styles from "../styles/modal.module.css"


export default function ModalWindow( props ) {

  // props.data.test.map(item => (
    
  // ))

  // props.data.test.map(item => {
  //   console.log(item)
  // })
  // for (const key in props.data.test) {
  //   console.log(props.data.test[key])
  //  }
  // function list(){
  //   for (const key in props.data.test) {
  //    return <li>{props.data.test[key]}</li>
  //   }
  // }

  return (
    <Modal show={ props.show } onHide={ props.close } centered="true">
      <Modal.Header >
        <Modal.Title>
            <h3 className={`text-center ${styles.h3}`}>
              { `Бакалавриат ${props.data.id}`}
            </h3>
            <h3 className={`text-center ${styles.h3}`}>
              {`${props.data.title} год`}
            </h3>
            </Modal.Title>
      </Modal.Header>
    <Modal.Body>
    <p className="text-center">{props.data.total}</p>
      <ol className={`${styles.l}`}>
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
    </Modal.Body>
  </Modal>
  )
}


