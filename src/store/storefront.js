import axios from "axios";

const initialState = {
  activeCategory: null,
  categories: [
    { name: 'Kitchenware', desc: 'Variety is the spices of life' },
    { name: 'Clothing', desc: 'Look good, doing what you do' },
    { name: 'Toys', desc: 'Fun for everyone' }
  ],
  products: [
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
  ],
};

export default function storefrontReducer(state = initialState, action) {
  switch (action.type) {

    case 'SELECT_DEPT':
      // console.log('select');
      return {
        ...state,
        activeCategory: action.payload.name,
      }

    case 'GET_CATEGORIES':
      return action.payload;

    default:
      return state;
    // case 'ADD_TO_CART':
    //   console.log('add');
    //   return state.products.map(product => {
    //     if (product.name === action.payload.name) {
    //       product.inventory--;
    //     }
    //     return product;
    //   })
    // case 'REMOVE_FROM_CART':
    //   return state.products.map(product => {
    //     if (product.name === action.payload.name) {
    //       product.inventory++;
    //     }
    //     return product;
    //   })
  }
}

export const selectCategory = (category) => {
  return {
    type: 'SELECT_DEPT',
    payload: category,
  }
}

export const getCategories = () => async (dispatch, getState) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
  console.log('API', response.data);

  dispatch(setCategories(response.data.results));
}

export const setCategories = (data) => {
  return {
    type: 'GET_CATEGORIES',
    payload: data
  }
}