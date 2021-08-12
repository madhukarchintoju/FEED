import axios from 'axios'

const config = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InJvbGVJZCI6IlI1MjAyMCIsInVzZXJOYW1lIjoiZnBvIiwidXNlcklkIjoiQTU4Nzg1IiwidXNlckVtYWlsIjoiZnBvQGdtYWlsLmNvbSJ9LCJpYXQiOjE2MjQyNTA2ODcsImV4cCI6MTYyNDI1NDI4N30.QlvDqZsT1Aw5Cj1VKCm9Ce0qQlnR2CkD2LadA_Tj_nQ',
  },
}

const getAboutUs = async function (id) {
  const url = `${process.env.REACT_APP_API_URL}sections/${id}`
  try {
    const response = await axios.get(url, config)
    console.log(response)
    return response
  } catch (error) {
    return error
  }
}

const registerFpcMember = async function (data) {
  const url = `${process.env.FEED_BE}/fpomember/register`
  try {
    const response = await axios.post(url, data)
    return response
  } catch (error) {
    return error
  }
}

const loginFpcMember = async function (data) {
  const url = `${process.env.FEED_BE}/fpomember/login`
  try {
    const response = await axios.post(url, data)
    return response
  } catch (error) {
    return error
  }
}

export { getAboutUs, registerFpcMember, loginFpcMember }
