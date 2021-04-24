import axios from 'axios'

if (!process.env.REACT_APP_API_URL) {
  throw new Error('REACT_APP_API_URL is undefined!!!')
}

axios.defaults.baseURL = process.env.REACT_APP_API_URL + '/api/'
axios.defaults.withCredentials = true
axios.interceptors.response.use(undefined, (error) => {
  const expectedError =
    error.response && error.response.status >= 400 && error.response.status < 500
  if (!expectedError) {
    console.error('An unexpected error ccurred.')
  }
  return Promise.reject(error)
})

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
}
