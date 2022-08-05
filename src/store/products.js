import axios from 'axios';

const initialState = [
  {
    name: '🍴 utensils set',
    category: 'Kitchenware',
    desc: 'spoons, forks, knifes',
    price: '$19.98',
    inventory: 32,
  },
  {
    name: '👖 jeans',
    category: 'Clothing',
    desc: 'comfortable blue jeans',
    price: '$19.98',
    inventory: 24,
  },
  {
    name: '🧩 puzzle',
    category: 'Toys',
    desc: '500-piece puzzle depicting a train station',
    price: '$19.98',
    inventory: 6,
  },
]

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return action.payload;
    case 'ADD_TO_CART':
      return state.map(product => {
        if (product.name === action.payload.name) {
          product.inventory--;
        }
        return product;
      });
    case 'REMOVE_FROM_CART':
      return state.map(product => {
        if (product.name === action.payload.name) {
          product.inventory++;
        }
        return product;
      });
    default:
      return state;
  }
}

export const getProducts = () => async (dispatch, getState) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/products');

  dispatch(setProducts(response.data.results));
}

export const setProducts = (data) => {
  return {
    type: 'GET_PRODUCTS',
    payload: data,
  }
}