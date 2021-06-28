import { GET_ABOUT_US } from './actions'

const initialState = {
  token: '',
}

const getAboutUsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ABOUT_US:
      return { ...state, aboutus: action.payload }
    default:
      return state
  }
}

export default getAboutUsReducer
