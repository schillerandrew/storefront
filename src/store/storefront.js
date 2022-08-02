const initialState = {
  categories: [
    { name: 'Kitchenware', desc: 'Put it all together with uHome kitchenware' },
    { name: 'Clothing', desc: 'Look good while doing what you do' },
    { name: 'Toys', desc: 'Fun for all ages' }
  ],
  activeCategory: null,
  products: [
    {
      name: 'utensils set',
      category: 'Kitchenware',
      desc: 'spoons, forks, knifes',
      price: '$19.98',
      inventory: 15,
    },
    {
      name: 'jeans',
      category: 'Clothing',
      desc: 'comfortable blue jeans',
      price: '$19.98',
      inventory: 24,
    },
    {
      name: 'puzzle',
      category: 'Toys',
      desc: '500-piece puzzle depicting a train station',
      price: '$19.98',
      inventory: 6,
    }
  ]
};

function storefrontReducer(state = initialState, action) {
  // let { type, payload } = action;
  switch (action.type) {

    case 'SELECT_DEPT':
      return {
        ...state,
        activeCategory: action.payload.name,
        // activeCategory: payload.name,
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

export default storefrontReducer;