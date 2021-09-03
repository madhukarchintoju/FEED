import ActionTypes from '../actions/actionTypes'
let initialState = {
  categories: [],
  category: {},
}
const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_CATEGORIES:
      return { ...state, categories: action.payload }
    case ActionTypes.FETCH_SINGLE_CATEGORY:
      return { ...state, category: action.payload }
    default:
      return state
  }
}

export default categoriesReducer
