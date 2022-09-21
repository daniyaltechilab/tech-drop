import React from "react";
import { Modal, Spinner, Button } from "react-bootstrap";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/style.css";
import "../../assets/plugins/fontawesome/css/all.min.css";
import "../../assets/plugins/fontawesome/css/fontawesome.min.css";

function SixNFTsErrorModal(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title> NFTs Error</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        {" "}
        <i className="fas fa-times-circle fa-10x"></i>
      </Modal.Body>
      <Modal.Body>You Cannot Select More than 6 Nfts to make a Cube</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SixNFTsErrorModal;
