import React from "react";
import "./style.scss";

const Navbar = ({ title }) => {
  return (
    <div className = 'navbar'>
      <h1>{title}</h1>
    </div>
  );
};

export default Navbar;
