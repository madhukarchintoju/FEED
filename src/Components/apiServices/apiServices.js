import axios from 'axios'
const FEED_BE = '13.235.160.1:3000/v1'

const registerFpcMember = async function (data) {
  const url = `http://${FEED_BE}/fpomember/register`
  try {
    const response = await axios.post(url, data)
    return response
  } catch (error) {
    return error.message
  }
}

const loginFpcMember = async function (data) {
  const url = `http://${FEED_BE}/fpomember/login`
  try {
    const response = await axios.post(url, data)
    return response
  } catch (error) {
    return error.message
  }
}

export { registerFpcMember, loginFpcMember }
