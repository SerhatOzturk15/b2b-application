import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import {editCompany} from './../../actions/companyActions'
import {useDispatch} from 'react-redux'

const ModalView = ({ closeDialog}) => {
const dispatch = useDispatch();

const handleEdit = (id, budget) => {
  dispatch(editCompany(id, budget))
}

  return (
    <Modal show centered onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Budget</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>$</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl aria-label="Amount (to the nearest dollar)" />
          <InputGroup.Append>
            <InputGroup.Text>.00</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={() => closeDialog()} variant="secondary">Close</Button>
        <Button onClick={() => handleEdit(1, 232)} variant="primary">Edit</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalView;
