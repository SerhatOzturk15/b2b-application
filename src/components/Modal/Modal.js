import React, { useState } from "react";
import PropTypes from 'prop-types';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Error from "./ErrorMessage";

const ModalView = ({
  closeDialog,
  handleEdit,
  totalBudget,
  isValid,
  validationMessage,
  modalTitle,
  primaryButtonText,
  secondaryButtonText
}) => {
  const [currentBudget, setCurrentBudget] = useState(totalBudget);

  const handleBudgetChange = (e) => {
    const newBudget = e.currentTarget.value;
    setCurrentBudget(newBudget);
  };

  return (
    <Modal
      show
      centered
      onHide={closeDialog}
      onExit={closeDialog}
      data-test="modalComponent"
    >
      <Modal.Header closeButton>
        <Modal.Title data-test="modalTitle">{modalTitle}</Modal.Title>
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
            onChange={(e) => handleBudgetChange(e)}
            aria-label="Amount (to the nearest dollar)"
          />
        </InputGroup>
      </Modal.Body>
      {!isValid && <Error message={validationMessage} data-test="modalError" />}
      <Modal.Footer>
        <Button onClick={() => closeDialog()} variant="secondary" data-test="secondaryButton">
          {secondaryButtonText}
        </Button>
        <Button onClick={() => handleEdit(currentBudget)} variant="primary" data-test="primaryButton">
          {primaryButtonText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

// ModalView.propTypes = {
//   closeDialog: PropTypes.func,
//   handleEdit: PropTypes.func,
//   totalBudget: PropTypes.number,
//   isValid: PropTypes.bool,
//   validationMessage: PropTypes.string.isRequired,
//   modalTitle: PropTypes.string.isRequired,
//   primaryButtonText: PropTypes.string.isRequired,
//   secondaryButtonText: PropTypes.string.isRequired,
// }

export default ModalView;
