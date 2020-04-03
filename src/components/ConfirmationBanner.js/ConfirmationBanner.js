import React from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ConfirmationBanner = ({handleSubmit, closeConfirmation}) => {
  return (
    <Modal show centered size="sm" onHide = {closeConfirmation}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmation</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Are you sure?</p>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={() => closeConfirmation()} variant="secondary">No</Button>
        <Button onClick={() => handleSubmit()} variant="primary">Yes</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ConfirmationBanner