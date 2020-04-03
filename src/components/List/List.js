import React, { useState } from "react";
import ListItem from "./../ListItem";
import Modal from "./../Modal";
import ConfirmationBanner  from './../ConfirmationBanner.js'

const mock = [{
  id: 1,
  name: 'Martian Firma',
  budget: 10000.0000,
  budget_spent: 4500.0000,
  date_of_first_purchase: '2119-07-07'
}, {
  id: 2,
  name: 'Solar Firma',
  budget: 1123.2200,
  budget_spent: 451.3754,
  date_of_first_purchase: '2120-01-14'
}]

const List = () => {
  const [companies, setCompanies] = useState(mock);
  const [value, setValue] = useState(0);
  const [name, setName] = useState(0);
  const [showModal, setModal] = useState(false);
  const [showConfirmation, setConfirmation] = useState(false);

  const handleModalSubmit = () => {
    //cal
    setValue(0);
  }

  const handleDialog = () => {
    setModal(true);
  }

  const closeDialog = () => {
    setModal(false);
  }

  const handleEdit = () => {
    setConfirmation(true)
  }

  const closeConfirmation = () => {
    setConfirmation(false)
  }

  const handleSubmit = () => {
    setConfirmation(false)
    setModal(false)
  }

  return (
    <>
      <h1>Business Table</h1>
      <table className="rwd-table">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>First Purchase Date</th>
            <th>Total Budget</th>
            <th>Budget Spent</th>
            <th>Budget Left</th>
          </tr>
        </thead>
        <tbody>
          {companies.map(item => {
            return (
              <ListItem
                key={item.id}
                name={item.name}
                firstDate={item.date_of_first_purchase}
                budget={item.budget}
                budgetSpent={item.budget_spent}
                handleDialog={handleDialog}
              >
              </ListItem>
            );
          })}
        </tbody>
      </table>
      {showModal &&
        <Modal closeDialog={closeDialog} handleEdit={handleEdit} />
      }
      {showModal && showConfirmation &&
      <ConfirmationBanner handleSubmit = {handleSubmit} closeConfirmation = {closeConfirmation}/>
      }
    </>
  );
};

export default List;
