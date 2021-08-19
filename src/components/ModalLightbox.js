import React from "react";
import { Modal, Image } from "react-bootstrap";

const ModalLightbox = (props) => (
  <Modal show={props.show} onHide={props.onHide} centered>
    <Modal.Header closeButton></Modal.Header>
    <Modal.Body>
      <Image src={props.image} fluid />
    </Modal.Body>
  </Modal>

  // <Modal
  //   show={props.show}
  //   onHide={props.onHide}
  //   size="lg"
  //   aria-labelledby="contained-modal-title-vcenter"
  //   centered
  // >
  //   <Modal.Header closeButton>
  //     <Modal.Title id="contained-modal-title-vcenter">
  //       Modal heading
  //     </Modal.Title>
  //   </Modal.Header>
  //   <Modal.Body>
  //     <h4>Centered Modal</h4>
  //     <p>
  //       Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
  //       dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
  //       consectetur ac, vestibulum at eros.
  //     </p>
  //   </Modal.Body>
  //   <Modal.Footer>
  //     <p onClick={props.onHide}>Close</p>
  //   </Modal.Footer>
  // </Modal>
);

export default ModalLightbox;
