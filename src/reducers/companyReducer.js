//import {initialState} from './../data/store'

export const companyReducer = (state = [], action) => {
  switch (action.type) {
    case "EDIT_COMPANY":
      return {
        ...state,
        companies: state.companies.map((company) => {
          return company.id === action.payload.id
            ? {
                ...company,
                budget_spent: action.payload.budget,
              }
            : company;
        }),
      };
    case "GET_COMPANY":
      return {
        ...state,
        companies: action.payload.companies,
      };
    case "SET_COMPANY_ID":
      return {
        ...state,
        id: action.payload.id,
      };
    case "SET_BUDGET":
      return {
        ...state,
        budget: action.payload.budget,
      };
    default:
      return state;
  }
};
