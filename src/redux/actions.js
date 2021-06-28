export const GET_ABOUT_US = 'GET_ABOUT_US'

export const getAboutUs = (about) => {
  return (dispatch) => {
    //use axios service
    setTimeout(() => {
      dispatch({
        type: GET_ABOUT_US,
        payload: about,
      })
    }, 700)
  }
}
