import React from "react";
import PropTypes from 'prop-types';
import { MdEdit } from "react-icons/md";

const ListItem = ({
  name,
  firstDate,
  budget,
  budgetSpent,
  budgetLeft,
  handleDialog,
}) => {
  return (
    <tr>
      <td data-th="Company Name">{name}</td>
      <td data-th="First Purchase Date">{firstDate}</td>
      <td data-th="Total Budget">{budget}</td>
      <td data-th="Budget Spent">{budgetSpent}</td>
      <td data-th="Budget Left">{budgetLeft}</td>
      <td>
        <button className="edit-btn" aria-label="edit button">
          <MdEdit onClick={() => handleDialog()} />
        </button>
      </td>
    </tr>
  );
};

// ListItem.propTypes = {
//   name: PropTypes.string,
//   firstDate: PropTypes.string,
//   budget: PropTypes.string,
//   budgetSpent: PropTypes.string,
//   budgetLeft: PropTypes.string,
//   handleDialog: PropTypes.func,
// };

export default ListItem;
