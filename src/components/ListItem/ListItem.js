import React from 'react';
import { MdEdit } from "react-icons/md";

const ListItem = ({ name, firstDate, budget, budgetSpent, handleDialog }) => {

  //convert number to german format with 2 decimals at the end for displaying purposes
  const formatNumber = (number) => {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number)
  }
  return (
    <tr>
      <td data-th="Company Name">{name}</td>
      <td data-th="First Purchase Date">{firstDate}</td>
      <td data-th="Total Budget">{formatNumber(budget)}</td>
      <td data-th="Budget Spent">{formatNumber(budgetSpent)}</td>
      <td data-th="Budget Left">{formatNumber(budget - budgetSpent)}</td>
      <td>
        <button className="edit-btn" aria-label="edit button">
          <MdEdit onClick={() => handleDialog()} />
        </button>
      </td>
    </tr>
  )
}

export default ListItem