import { Modal } from "react-bootstrap";
import * as backlawr from "../BACK.json"

export default function ModalWindow({show, close}) {
  return (
    <Modal show={show} onHide={close} centered="true">
      <Modal.Header closeButton>
        <Modal.Title>{ backlawr.title }</Modal.Title>
      </Modal.Header>
    <Modal.Body>{ backlawr.body }</Modal.Body>
  </Modal>
  )
}
