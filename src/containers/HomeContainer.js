import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { List, Modal, ConfirmationBanner, Navbar } from "./../components/";
import {
  editCompany,
  getCompanies,
  setCompanyId,
  setBudget,
} from "./../actions/companyActions";
import { initialState } from "./../data/store";

const HomeContainer = () => {
  const dispatch = useDispatch();

  //states
  const [showModal, setModal] = useState(false);
  const [showConfirmation, setConfirmation] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [validationMessage, setValidationMessage] = useState("");
  const companies = useSelector((state) => state.comp.companies);
  const budget = useSelector((state) => state.comp.budget);
  const id = useSelector((state) => state.comp.id);

  //table header
  const header = [
    "Company Name",
    "First Purchase Date",
    "Total Budget",
    "Budget Spent",
    "Budget Left",
  ];

  useEffect(() => {
    dispatch(getCompanies(initialState));
  }, [dispatch]);

  const handleDialog = (id, budget) => {
    setModal(true);
    dispatch(setBudget(budget));
    dispatch(setCompanyId(id));
  };

  const closeDialog = () => {
    setModal(false);
    setIsValid(true);
    setValidationMessage("");
  };

  const handleEdit = (desiredBudget) => {
    const selectedCompany = companies.find((company) => company.id === id);
    const desiredNumber = parseFloat(desiredBudget);
    if (selectedCompany.budget < desiredNumber) {
      setIsValid(false);
      setValidationMessage(
        "entered spent budget cannot be more than total budget"
      );
      return;
    }
    if (selectedCompany.budget_spent > desiredNumber) {
      setIsValid(false);
      setValidationMessage(
        "entered spent budget cannot be less than current spent budget"
      );
      return;
    }
    setConfirmation(true);
    dispatch(setBudget(desiredNumber));
  };

  const closeConfirmation = () => {
    setConfirmation(false);
  };

  const handleSubmit = ({ id, budget }) => {
    setConfirmation(false);
    setModal(false);
    dispatch(editCompany(id, budget));
  };

  return (
    <>
      <Navbar title={"Business Process"} />
      <List header={header} items={companies} handleDialog={handleDialog} />
      {showModal && (
        <Modal
          closeDialog={closeDialog}
          handleEdit={handleEdit}
          totalBudget={budget}
          isValid={isValid}
          validationMessage={validationMessage}
          primaryButtonText={"Yes"}
          secondaryButtonText={"No"}
          modalTitle="Edit Budget"
        />
      )}
      {showModal && showConfirmation && (
        <ConfirmationBanner
          handleSubmit={handleSubmit}
          closeConfirmation={closeConfirmation}
          id={id}
          budget={budget}
          primaryButtonText={"Yes"}
          secondaryButtonText={"No"}
          bodyText={"Are you sure?"}
          confirmationTitle={"Confirmation"}
        />
      )}
    </>
  );
};

export default HomeContainer;
