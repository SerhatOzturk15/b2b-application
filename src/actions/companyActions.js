export const editCompany = (id, budget) => {
  return {
    type: "EDIT_COMPANY",
    payload: { id, budget },
  };
};

export const getCompanies = (companies) => {
  return {
    type: "GET_COMPANY",
    payload: companies,
  };
};

export const setCompanyId = (id) => {
  return {
    type: "SET_COMPANY_ID",
    payload: { id },
  };
};

export const setBudget = (budget) => {
  return {
    type: "SET_BUDGET",
    payload: { budget },
  };
};
