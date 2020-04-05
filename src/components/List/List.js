import React from "react";
import PropTypes from 'prop-types'
import ListItem from "./../ListItem";

const List = ({ header, items, handleDialog }) => {
  //convert number to german format with 2 decimals at the end for displaying purposes
  const formatNumber = (number) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(number);
  };
  return (
    <>
      <table className="rwd-table" data-test="listComponent">
        <thead>
          <tr>
            {header && header.map((col) => {
              return <th key={col}>{col}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {items &&
            items.map((item) => {
              return (
                <ListItem
                  key={item.id}
                  name={item.name}
                  firstDate={item.date_of_first_purchase}
                  budget={formatNumber(item.budget)}
                  budgetSpent={formatNumber(item.budget_spent)}
                  budgetLeft={formatNumber(item.budget - item.budget_spent)}
                  handleDialog={() => handleDialog(item.id, item.budget)}
                ></ListItem>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

// List.propTypes = {
//   header: PropTypes.arrayOf(PropTypes.string), 
//   items: PropTypes.arrayOf(PropTypes.object), 
//   handleDialog: PropTypes.func
// };

export default List;
