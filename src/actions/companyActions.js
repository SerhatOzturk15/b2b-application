export const editCompany = (id, budget) => {
  return {
    type: 'EDIT_COMPANY',
    payload: {id, budget}
  }
}