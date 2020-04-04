import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import { editCompany } from "./../../actions/companyActions";
import { useDispatch, useSelector } from "react-redux";

const ModalView = ({ closeDialog, handleEdit, currentBudget }) => {
  const dispatch = useDispatch();
  const [budget, setBudget] = useState("");
  const[isValid, setIsValid] = useState(true)
  const budgetSpent = useSelector(store => store.comp.budget);

  const handleBudgetChange = e => {
    setBudget(budget);
  };

  return (
    <Modal show centered onHide={closeDialog}>
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
          <Form.Control.Feedback>
            Please provide a valid city.
          </Form.Control.Feedback>
          <InputGroup.Append>
            <InputGroup.Text>.00</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={() => closeDialog()} variant="secondary">
          Close
        </Button>
        <Button onClick={() => handleEdit(budget)} variant="primary">
          Edit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalView;
