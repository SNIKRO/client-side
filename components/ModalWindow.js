import { Modal } from "react-bootstrap";

export default function ModalWindow({show, close}) {
  return (
    <Modal show={show} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>TEST</Modal.Title>
      </Modal.Header>
    <Modal.Body>TFTUGEFBFHBBFB</Modal.Body>
  </Modal>
  )
}
