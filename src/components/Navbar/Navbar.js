import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const Navbar = ({ title }) => {
  return (
    <div className="navbar">
      <h1>{title}</h1>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
