import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import departmentsReducer from './departments';

let reducers = combineReducers({
  departments: departmentsReducer,
});

export default function store(){
  return createStore(reducers, composeWithDevTools());
}