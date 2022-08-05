const initialState = '';

export default function activeCategoryReducer (state = initialState, action) {

  // console.log(action);
    switch(action.type){

      case 'SELECT_CATEGORY':
        return action.payload.name;

      default: 
        return state;
    }
}

export const activeCategory = (category) => {
  return {
    type: 'SELECT_CATEGORY',
    payload: category,
  }
}