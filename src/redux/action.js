export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const TOKEN_STORED = 'TOKEN_STORED'

export const loginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    user: data,
  }
}

export const tokenStored = (data) => {
  return {
    type: TOKEN_STORED,
    token: data,
  }
}
