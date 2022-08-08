const initialState = {
  categories: [
    { name: 'Kitchenware', desc: 'Put it all together with uHome kitchenware' },
    { name: 'Clothing', desc: 'Look good while doing what you do' },
    { name: 'Toys', desc: 'Fun for all ages' }
  ],
  activeCategory: null,
};

function categoriesReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {

    case 'SELECT_DEPT':
      return {
        ...state,
        activeCategory: payload.name,
      }

    default:
      return state;
  }
}

export const selectCategory = (category) => {
  return {
    type: 'SELECT_DEPT',
    payload: category,
  }
}

export default categoriesReducer;