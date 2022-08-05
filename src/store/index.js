import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from './middleware/thunk';

// import storefrontReducer from './storefront';
import categoriesReducer from './categories';
import activeCategoryReducer from './active';
import productsReducer from './products';
import cartReducer from './simplecart';


let reducers = combineReducers({
  // storefront: storefrontReducer,
  categories: categoriesReducer,
  active: activeCategoryReducer,
  products: productsReducer,
  cart: cartReducer,
});

export default function store(){
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}