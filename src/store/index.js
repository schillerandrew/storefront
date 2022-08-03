import { legacy_createStore as createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import storefrontReducer from './storefront';
import cartReducer from './simplecart';

let reducers = combineReducers({
  storefront: storefrontReducer,
  cart: cartReducer,
});

export default function store(){
  return createStore(reducers, composeWithDevTools());
}