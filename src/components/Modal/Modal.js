import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Error from "./ErrorMessage";

const ModalView = ({ closeDialog, handleEdit, totalBudget, isValid, validationMessage}) => {
  const [currentBudget, setCurrentBudget] = useState(totalBudget);

  const handleBudgetChange = e => {
    const newBudget = e.currentTarget.value;
    setCurrentBudget(newBudget);
  };

  return (
    <Modal show centered onHide={closeDialog} onExit = {closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Budget</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>€</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            type="number"
            placeholder="Enter Budget e.g 2500"
            defaultValue={currentBudget}
            onChange={e => handleBudgetChange(e)}
            aria-label="Amount (to the nearest dollar)"
          />
        </InputGroup>
      </Modal.Body>
      {!isValid && <Error message = {validationMessage}/>}
      <Modal.Footer>
        <Button onClick={() => closeDialog()} variant="secondary">
          Close
        </Button>
        <Button onClick={() => handleEdit(currentBudget)} variant="primary">
          Edit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalView;
