import React, { useState, useEffect } from "react";
import ListItem from "./../ListItem";
import Modal from "./../Modal";
import ConfirmationBanner from "../ConfirmationBanner";

const List = ({ header, items, handleDialog }) => {

    //convert number to german format with 2 decimals at the end for displaying purposes
    const formatNumber = (number) => {
      return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number)
    }
  return (
    <>
      <table className="rwd-table">
        <thead>
          <tr>
            {header.map((col) => {
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

export default List;
