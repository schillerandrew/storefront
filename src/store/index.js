import { legacy_createStore as createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import storefrontReducer from './storefront';

let reducers = combineReducers({
  storefront: storefrontReducer,
});

export default function store(){
  return createStore(reducers, composeWithDevTools());
}