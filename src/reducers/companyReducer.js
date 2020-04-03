const companies = [{
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

export const CompanyReducer = (state = [], action) => {
  switch (action.type) {
    case 'EDIT_COMPANY':
      return {
        ...state, companies: companies.map(company => {
          return company.id === action.id ? {
            ...company, budget_spent: action.budgetSpent
          } : company;
        })
      }
    default:
      return state

  }
}