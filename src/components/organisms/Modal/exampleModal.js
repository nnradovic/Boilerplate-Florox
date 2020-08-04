import React from "react";
import { Container, Button, Row, Col, Modal } from "react-bootstrap";

// TODO: Make body of modal dynamic
function ExampleModal(props) {
  return (
    <Modal
      {...props}
      centered
      aria-labelledby="contained-modal-title-vcenter"
      className="pb-5"
    >
      <Modal.Header
        closeButton
        className="d-flex align-items-center rounded-top h-row text-base card-header"
      >
        <Modal.Title id="contained-modal-title-vcenter" className="text-base">
          Modal title
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container className="px-0">
          <Row>
            <Col>
              <p className="text-base">Modal body content goes here.</p>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer className="d-flex align-items-center rounded-bottom h-row text-sm py-0">
        <Button onClick={props.onHide} className="m-0">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ExampleModal;
