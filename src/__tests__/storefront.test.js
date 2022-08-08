import categoriesReducer from '../store/storefront';
import { legacy_createStore as createStore, combineReducers} from 'redux';

import { selectCategory } from '../store/storefront';

describe('Redux tests', () => {
  const reducers = combineReducers({
    categories: categoriesReducer,
  })

  const store = createStore(reducers);

  

  test('Store should have three starting departments', () => {
    const state = store.getState();

    console.log('state', state.categories)
    console.log('state0', state.categories[0])

    expect(state.categories.categories[0].name).toEqual('Kitchenware');
    expect(state.categories.categories[1].name).toEqual('Clothing');
    expect(state.categories.categories[2].name).toEqual('Toys');
  })

  test('Active department is set in state after click', () => {
    let { categories } = store.getState();
    store.dispatch(selectCategory(categories.categories[0]));

    let state = store.getState();
    expect(state.categories.activeCategory).toEqual('Kitchenware');
  })
})