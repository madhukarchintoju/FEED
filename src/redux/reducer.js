import { TOKEN_STORED, LOGIN_SUCCESS } from './actions'

const initialState = {
  token: '',
  user: {},
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOKEN_STORED:
      return { ...state, token: action.token }
    case LOGIN_SUCCESS:
      return { ...state, user: action.user }
    default:
      return state
  }
}

export default reducer
