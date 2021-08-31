import ActionTypes from '../actions/actionTypes'
let initialState = {
  products: [],
}
const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_PRODUCTS:
      return { ...state, products: action.payload }
    default:
      return state
  }
}
export default productsReducer
