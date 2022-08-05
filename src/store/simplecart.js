const initialState = {
  shoppingCart: [],
};

function cartReducer(state = initialState, action) {
  switch (action.type) {

    case 'ADD_TO_CART':
      return {
        ...state,
        shoppingCart: [...state.shoppingCart, action.payload],
      }
    case 'REMOVE_FROM_CART':
      return {
        shoppingCart: state.shoppingCart.filter(product => product.name !== action.payload.name)
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

export const removeFromCart = (product) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: product,
  }
}

export default cartReducer;