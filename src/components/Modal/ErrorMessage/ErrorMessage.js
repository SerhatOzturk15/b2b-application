import React from "react";
import PropTypes from "prop-types";

const ErrorMesage = ({ message }) => {
  return (
    <div
      style={{ background: "#C0392B", color: "white", textAlign: "center" }}
      data-test="errorMessageComponent"
    >
      {message}
    </div>
  );
};

// ErrorMesage.propTypes = {
//     message: PropTypes.string.isRequired,
//   };

export default ErrorMesage;
