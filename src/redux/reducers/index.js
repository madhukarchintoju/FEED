import productsReducer from './products'
import categoriesReducer from './categories'
import tagsReducer from './tags'
import { combineReducers } from 'redux'

const reducers = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  tags: tagsReducer,
})

export default reducers
