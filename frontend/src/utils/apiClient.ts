import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3001/api/'
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
