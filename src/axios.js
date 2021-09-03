import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://feed-api-314306.el.r.appspot.com',
})

export default axiosInstance
