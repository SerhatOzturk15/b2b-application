import React from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ConfirmationBanner = ({
  handleSubmit,
  closeConfirmation,
  id,
  budget,
  secondaryButtonText,
  primaryButtonText,
  bodyText,
  confirmationTitle,
}) => {
  return (
    <Modal
      show
      centered
      size="sm"
      onHide={closeConfirmation}
      data-test="confirmationComponent"
    >
      <Modal.Header closeButton>
        <Modal.Title data-test="confirmationTitle">
          {confirmationTitle}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body data-test="confirmationBody">
        <p>{bodyText}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button
          onClick={() => closeConfirmation()}
          variant="secondary"
          data-test="secondaryButton"
        >
          {secondaryButtonText}
        </Button>
        <Button
          onClick={() => handleSubmit({ id, budget })}
          variant="primary"
          data-test="primaryButton"
        >
          {primaryButtonText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

ConfirmationBanner.propTypes = {
  handleSubmit: PropTypes.func,
  closeConfirmation: PropTypes.func,
  id: PropTypes.number,
  budget: PropTypes.number,
  secondaryButtonText: PropTypes.string.isRequired,
  primaryButtonText: PropTypes.string.isRequired,
  bodyText: PropTypes.string,
  confirmationTitle: PropTypes.string
}

export default ConfirmationBanner;
