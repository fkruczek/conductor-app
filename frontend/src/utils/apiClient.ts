import axios from 'axios'
if (process.env.NODE_ENV === 'test') {
  process.env.REACT_APP_API_URL = 'a'
}

if (!process.env.REACT_APP_API_URL) {
  throw new Error('❌ REACT_APP_API_URL is undefined!!!')
}

axios.defaults.baseURL = process.env.REACT_APP_API_URL + '/api/'
axios.defaults.withCredentials = true
axios.interceptors.response.use(undefined, (error) => {
  const expectedError =
    error.response && error.response.status >= 400 && error.response.status < 500

  if (!expectedError || error.response.status === 401) {
    // TODO: better logout
    window.localStorage.removeItem('partsChoice')
    window.localStorage.removeItem('currentRoomId')
    window.localStorage.removeItem('__google_auth_token__')
  }
  return Promise.reject(error)
})

export const api = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
}
