import React, { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'
import ListItem from "./../ListItem";
import Modal from "./../Modal";
import ConfirmationBanner  from './../ConfirmationBanner.js'
import {editCompany, getCompanies, setCompanyId, setBudget} from './../../actions/companyActions'
import {initialState} from './../../data/store'

const List = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCompanies(initialState));
  }, []);
  const companies = useSelector(state => state.comp.companies);
  const id = useSelector(state => state.comp.id);
  const budget = useSelector(state => state.comp.budget);
  const [showModal, setModal] = useState(false);
  const [showConfirmation, setConfirmation] = useState(false);

  const handleDialog = (id, budget) => {
    setModal(true)
    dispatch(setBudget(budget))
    dispatch(setCompanyId(id))
  }

  const closeDialog = () => {
    setModal(false);
  }

  const handleEdit = (budget) => {
    dispatch(setBudget(budget))
    setConfirmation(true)
  }

  const closeConfirmation = () => {
    setConfirmation(false)
  }

  const handleSubmit = () => {
    setConfirmation(false)
    setModal(false)
    dispatch(editCompany(id,budget))
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
          {companies && companies.map(item => {
            return (
              <ListItem
                key={item.id}
                name={item.name}
                firstDate={item.date_of_first_purchase}
                budget={item.budget}
                budgetSpent={item.budget_spent}
                handleDialog={() => handleDialog(item.id, item.budget)}
              >
              </ListItem>
            );
          })}
        </tbody>
      </table>
      {showModal &&
        <Modal closeDialog={closeDialog} handleEdit={handleEdit} currentBudget = {budget}/>
      }
      {showModal && showConfirmation &&
      <ConfirmationBanner handleSubmit = {handleSubmit} closeConfirmation = {closeConfirmation}/>
      }
    </>
  );
};

export default List;
