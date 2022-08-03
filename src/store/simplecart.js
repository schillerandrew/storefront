const initialState = {
  shoppingCart: [],
};

function cartReducer (state = initialState, action) {
  switch (action.type) {

    case 'ADD_TO_CART':
      console.log('add');
      return {
        ...state,
        shoppingCart: [...state.shoppingCart, action.payload],
      }
    default:
      return state;
  }
}

export const addToCart = (product) => {
  return {
    type: 'ADD_TO_CART',
    payload: product,
  }
}

export default cartReducer;