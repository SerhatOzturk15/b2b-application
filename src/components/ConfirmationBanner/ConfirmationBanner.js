import React from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {editCompany} from '../../actions/companyActions'
import {useDispatch, useSelector} from 'react-redux'

const ConfirmationBanner = ({handleSubmit, closeConfirmation, id, budget}) => {
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
        <Button onClick={() => handleSubmit({id, budget})} variant="primary">Yes</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ConfirmationBanner