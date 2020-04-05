import React from "react";
import PropTypes from "prop-types";
import ListItem from "./../ListItem";
import { formatNumber } from "./../../Util";

const List = ({ header = [], items = [], handleDialog }) => {
  return (
    <>
      <table className="business-table" data-test="listComponent">
        <thead>
          <tr>
            {header.map((col) => {
              return (
                <th key={col} data-test="headerItem">
                  {col}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <ListItem
                data-test="listItem"
                key={item.id}
                name={item.name}
                firstDate={item.date_of_first_purchase}
                header = {header}
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

List.propTypes = {
  header: PropTypes.arrayOf(PropTypes.string),
  items: PropTypes.arrayOf(PropTypes.object),
  handleDialog: PropTypes.func
};

export default List;
