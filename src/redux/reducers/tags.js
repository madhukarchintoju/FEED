import ActionTypes from '../actions/actionTypes'
let initialState = {
  tags: [],
}
const tagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_TAGS:
      return { ...state, tags: action.payload }
    default:
      return state
  }
}

export default tagsReducer
