const initialState = {
  departments: [
    { name: 'Kitchenware', desc: 'Put it all together with uHome kitchenware' },
    { name: 'Clothing', desc: 'Look good while doing what you do' },
    { name: 'Toys', desc: 'Fun for all ages' }
  ],
  active: null,
};

function departmentsReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {

    case 'DISPLAY':
      return {
        ...state,
        active: payload.name,
        // departments: state.departments.map(dept => {
        //   if (dept.name === payload.name) {
        //     return {
        //       name: dept.name,
        //       desc: dept.desc,
        //       active: payload.name
        //     }
        //   }
        //   return dept;
        // }),
      }

    default:
      return state;
  }
}

export const displayProducts = (department) => {
  return {
    type: 'DISPLAY',
    payload: department,
  }
}

export default departmentsReducer;