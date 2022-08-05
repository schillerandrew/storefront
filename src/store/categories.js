import axios from "axios";

const initialState = [
    { name: 'Kitchenware', desc: 'Variety is the spices of life' },
    { name: 'Clothing', desc: 'Look good, doing what you do' },
    { name: 'Toys', desc: 'Fun for everyone' },
];

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {

    case 'GET_CATEGORIES':
      return action.payload;

    default:
      return state;
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