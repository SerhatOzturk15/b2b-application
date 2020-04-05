import React from "react";
import PropTypes from "prop-types";
import { MdEdit } from "react-icons/md";

const ListItem = ({
  name,
  firstDate,
  budget,
  budgetSpent,
  budgetLeft,
  handleDialog,
  header,
}) => {
  return (
    <>
    {header && 
        <tr data-test="listItemComponent">
        <td data-th={header[0]} data-test="itemName">
          {name}
        </td>
        <td data-th={header[1]} data-test="itemDate">
          {firstDate}
        </td>
        <td data-th={header[2]} data-test="itemBudget">
          {budget}
        </td>
        <td data-th={header[3]} data-test="itemBudgetSpent">
          {budgetSpent}
        </td>
        <td data-th={header[4]} data-test="itemBudgetLeft">
          {budgetLeft}
        </td>
        <td>
          <button
            className="edit-btn"
            aria-label="edit button"
            data-test="editButton"
          >
            <MdEdit onClick={() => handleDialog()} />
          </button>
        </td>
      </tr>
    }
    </>

  );
};

ListItem.propTypes = {
  name: PropTypes.string,
  firstDate: PropTypes.string,
  budget: PropTypes.string,
  budgetSpent: PropTypes.string,
  budgetLeft: PropTypes.string,
  handleDialog: PropTypes.func,
  header: PropTypes.array,
};

export default ListItem;
