import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import categoriesReducer from './storefront';

let reducers = combineReducers({
  categories: categoriesReducer,
});

export default function store(){
  return createStore(reducers, composeWithDevTools());
}